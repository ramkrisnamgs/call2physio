import { deletePhysioAccount } from "@/lib/firebase/physio/write";
import { listPhysioFiles } from "@/lib/firebase/physio/read";
import { Button } from "@heroui/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "./ConfirmationModal";

export default function DeleteAccountSection({ uid }) {
  const [fileNames, setFileNames] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (uid) {
      listPhysioFiles(uid)
        .then((files) => setFileNames(files.map(f => f.name)))
        .catch(() => toast.error("Failed to fetch documents"));
    }
  }, [uid]);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deletePhysioAccount(uid, fileNames);
      toast.success("Account and documents deleted successfully");
      // Optional: redirect to home / logout
    } catch (error) {
      toast.error("Failed to delete account: " + error.message);
    } finally {
      setIsDeleting(false);
      setShowModal(false);
    }
  };

  return (
    <div className="bg-red-50 border border-red-200 p-6 rounded-lg space-y-4">
      <h3 className="text-xl font-semibold text-red-700">Danger Zone</h3>
      <p className="text-sm text-red-600">
        This will permanently delete your account and all associated documents.{" "}
        <span className="text-xs">This action cannot be undone.</span>
      </p>

      <Button
        onPress={() => setShowModal(true)}
        className="bg-red-600 text-white rounded px-4 py-2 cursor-pointer"
      >
        Delete My Account
      </Button>

      <ConfirmationModal isOpen={showModal}/>
    </div>
  );
}
