import { db, storage } from "@/lib/firebase";
import {
  deleteDoc,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  listAll,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";

// Upload physio document with category/type
export async function uploadPhysioDocument(
  uid,
  file,
  docType = "other",
  onProgress
) {
  if (!uid || !file) throw new Error("UID and file are required.");

  const storageRef = ref(
    storage,
    `physio_docs/${uid}/${Date.now()}_${file.name}`
  );
  const uploadTask = uploadBytesResumable(storageRef, file);

  await new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snap) => {
        const progress = Math.round(
          (snap.bytesTransferred / snap.totalBytes) * 100
        );
        onProgress(progress);
      },
      reject,
      resolve
    );
  });

  const downloadURL = await getDownloadURL(storageRef);

  const docMeta = {
    name: file.name,
    url: downloadURL,
    fullPath: storageRef.fullPath,
    docType,
    status: "Pending",
    uploadedAt: new Date().toISOString(),
  };

  const userRef = doc(db, "user", uid);
  const snap = await getDoc(userRef);
  if (snap.exists()) {
    const data = snap.data();
    const existingDocs = data.verificationDocs || [];
    await updateDoc(userRef, {
      verificationDocs: [...existingDocs, docMeta],
      isApproved: false,
      status: "pending",
      // updatedAt: serverTimestamp(),
    });
  } else {
    await updateDoc(userRef, {
      verificationDocs: [docMeta],
      isApproved: false,
      status: "pending",
      // updatedAt: serverTimestamp(),
    });
  }

  return docMeta;
}

// Delete a physio document
export async function deletePhysioDocument(uid, fileMeta) {
  const fileRef = ref(storage, fileMeta.fullPath);
  await deleteObject(fileRef);

  const userRef = doc(db, "user", uid);
  const snap = await getDoc(userRef);
  if (!snap.exists()) return;

  // Remove the document from the list
  const updatedDocs = (snap.data().verificationDocs || []).filter(
    (d) => d.fullPath !== fileMeta.fullPath
  );
  await updateDoc(userRef, {
    verificationDocs: updatedDocs,
  });
}

// Get download URL for file (on-demand)
export async function getDownloadURLForPhysioDoc(uid, fileName) {
  const fileRef = ref(storage, `physio_docs/${uid}/${fileName}`);
  return await getDownloadURL(fileRef);
}

// Approve Physio
export async function approvePhysio(uid) {
  const ref = doc(db, "user", uid);
  await updateDoc(ref, {
    isApproved: true,
    status: "Approved",
    approvedAt: serverTimestamp(),
  });
}

// Reject Physio (optional: delete account)
export async function rejectPhysio(uid) {
  const ref = doc(db, "user", uid);
  await updateDoc(ref, {
    isApproved: false,
    status: "Rejected",
    rejected: true,
    rejectedAt: serverTimestamp(),
  });
}

// Suspend physio
export async function suspendPhysio(uid) {
  const ref = doc(db, "user", uid);
  await updateDoc(ref, {
    isApproved: false,
    status: "Suspended",
    isSuspended: true,
    suspendedAt: serverTimestamp(),
  });
}

//Upload file to Storage
export const uploadPhysioFile = async (uid, file) => {
  const fileRef = ref(storage, `physio_docs/${uid}/${file.name}`);
  await uploadBytes(fileRef, file);
  const downloadURL = await getDownloadURL(fileRef);
  return { url: downloadURL, fullPath: fileRef.fullPath };
};

// Get the download URL for a specific file of a physio
// export async function getDownloadURLForPhysioDoc(uid, fileName) {
//   try {
//     const fileRef = ref(storage, `physio_docs/${uid}/${fileName}`);
//     const url = await getDownloadURL(fileRef);
//     return url;
//   } catch (error) {
//     console.error("Failed to get download URL:", error);
//     throw error;
//   }
// }

//Delete a file from Storage
export const deletePhysioFile = async (uid, fileName) => {
  if (!uid || !fileName) {
    throw new Error("UID and fileName are required to delete a file.");
  }
  try {
    const fileRef = ref(storage, `physio_docs/${uid}/${fileName}`);
    await deleteObject(fileRef);
    return { success: true };
  } catch (error) {
    console.error("Error deleting file:", error);
    throw new Error("Failed to delete document.");
  }
};

// Request admin approval
export const requestPhysioApproval = async (uid) => {
  const ref = doc(db, "user", uid);
  await updateDoc(ref, {
    status: "Pending",
    approvalRequestedAt: serverTimestamp(),
  });
};

// Delete physio account and all their files
export const deletePhysioAccount = async (uid) => {
  const folderRef = ref(storage, `physio_docs/${uid}`);
  const list = await listAll(folderRef);

  // Delete each file
  const deletions = list.items.map((item) => {
    deleteObject(item);
  });
  await Promise.all(deletions);

  // Finally delete Firestore user doc
  const userRef = doc(db, "user", uid);
  await deleteDoc(userRef);
  // await updateDoc(userRef, {
  //   role: null,
  //   isApproved: false,
  //   status: "Deleted",
  //   deletedAt: serverTimestamp(),
  // });
};

// import { db, storage } from "@/lib/firebase";
// import {
//   arrayRemove,
//   arrayUnion,
//   deleteDoc,
//   doc,
//   serverTimestamp,
//   updateDoc,
// } from "firebase/firestore";
// import {
//   deleteObject,
//   getDownloadURL,
//   ref,
//   uploadBytes,
// } from "firebase/storage";

// /**
//  * Upload a document and update Firestore user doc
//  */
// export async function uploadPhysioDocument(uid, file) {
//   const fileRef = ref(storage, `physio_docs/${uid}/${file.name}`);
//   await uploadBytes(fileRef, file);
//   const url = await getDownloadURL(fileRef);

//   const userRef = doc(db, "user", uid);
//   await updateDoc(userRef, {
//     document: arrayUnion({
//       name: file.name,
//       url,
//       uploadedAt: serverTimestamp(),
//     }),
//   });
//   return url;
// }

// /**
//  * Delete a single document from Storage and Firestore
//  */
// export async function deletePhysioDocument(uid, fileName) {
//   const fileRef = ref(storage, `physio_docs/${uid}/${fileName}`);
//   await deleteObject(fileRef);

//   const userRef = doc(db, "user", uid);
//   await updateDoc(userRef, {
//     documents: arrayRemove({ name: fileName }),
//   });
// }

// /**
//  * Submit physio application (about, experience etc.)
//  */
// export async function submitPhysioApplication(uid, formData) {
//   const userRef = doc(db, "user", uid);
//   await updateDoc(userRef, {
//     ...formData,
//     isApproved: false,
//     status: "Pending",
//     timestampUpdate: serverTimestamp(),
//   });
// }

// /**
//  * List all physio documents (file names) from Firebase Storage
//  * under /physio_documents/{uid}/
//  */
// export async function listPhysioDocuments(uid) {
//   try {
//     const folderRef = ref(storage, `physio_docs/${uid}`);
//     const res = await listAll(folderRef);
//     const fileNames = res.items.map((itemRef) => itemRef.name);
//     return fileNames;
//   } catch (error) {
//     console.error("Failed to list physio documents: ", error);
//     return [];
//   }
// }

// /**
//  * Delete all physio documents (for account deletion)
//  */
// export async function deleteAllPhysioDocuments(uid) {
//   const folderRef = ref(storage, `physio_docs/${uid}`);
//   try {
//     const deletionPromises = listResult.items.map((itemRef) =>
//       deleteObject(itemRef)
//     );
//     await Promise.all(deletionPromises);
//   } catch (error) {
//     console.error("Error deleting physio documents: ", error.message);
//   }
// }

// /**
//  * Delete physio account entirely
//  */
// export async function deletePhysioAccount(uid) {
//   try {
//     await deleteAllPhysioDocuments(uid);
//     await deleteDoc(doc(db, "user", uid));
//   } catch (error) {
//     throw new Error("Failed to delete physio account: " + error.message);
//   }
// }

// import { db, storage } from "@/lib/firebase";
// import { deleteDoc, doc, serverTimestamp, updateDoc } from "firebase/firestore";
// import { deleteObject, getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";

// /**
//  * Submit physio application data.
//  * @param {string} uid - Firebase Auth UID
//  * @param {object} formData - Form data for physio profile
//  */

// export async function submitPhysioApplication(uid, formData) {
//   const userRef = doc(db, "user", uid);
//   await updateDoc(userRef, {
//     ...formData,
//     isApproved: false,
//     status: "Pending",
//     timestampUpdate: serverTimestamp(),
//   });
// }

// /**
//  * Upload a document to Firebase Storage and return the download URL.
//  * @param {string} uid - Firebase Auth UID
//  * @param {} file - File object to be uploaded
//  * @param {string} fileName - Name of the file to be uploaded
//  */

// export async function uploadPhysioDocument(uid, file, fileName) {
//      const storageRef = ref(storage, `physio_docs/${uid}/${fileName}`);
//      await uploadBytes(storageRef, file);
//      return await getDownloadURL(storageRef);
// }

// /**
//  * List all physio documents (file names) from Firebase Storage
//  * under /physio_documents/{uid}/
//  */

// export async function listPhysioDocuments(uid) {
//   try {
//     const folderRef = ref(storage, `physio_docs/${uid}`);
//     const res = await listAll(folderRef);
//     const fileNames = res.items.map((itemRef) => itemRef.name);
//     return fileNames;
//   } catch (error) {
//     console.error("Failed to list physio documents: ", error);
//     return [];
//   }
// }

// /**
//  * Delete a Physio document from Firebase Storage.
//  * @param {string} uid - Firebase Auth UID
//  */

// export async function deleteAllPhysioDocuments(uid) {
//   const folderRef = ref(storage, `physio_docs/${uid}`);
//   try {
//     const listResult = await listAll(folderRef);
//     const deletionPromises = listResult.items.map((itemRef) => deleteObject(itemRef));
//     await Promise.all(deletionPromises);
//   } catch (error) {
//     console.error("Error deleting physio documents from storage:", error.message);
//   }
// }

// /**
//  * Delete Physio account data (admin-only or user withdrawl)
//  * @param {string} uid - Firebase Auth UID
//  */

// export async function deletePhysioAccount(uid) {
//      try {
//       await deleteAllPhysioDocuments(uid);
//       await deleteDoc(doc(db, "user", uid));
//      } catch (error) {
//       throw new Error("Failed to delete physio account: " + error.message);
//      }
// }
