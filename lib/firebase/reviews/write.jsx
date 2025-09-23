/**
 * Patient leaves a review for a completed appointment
 * @param {string} physioId - The ID of the physio
 * @return {object} - The review object
 */

import { db } from "@/lib/firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";

export async function createReview({
  physioId,
  patientId,
  patientName,
  rating,
  comment,
}) {
  try {
    const docRef = await addDoc(collection(db, "reviews"), {
      physioId,
      patientId,
      patientName,
      rating,
      comment,
      createdAt: Timestamp.now(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error creating review:", error);
    throw error;
  }
}
