"use client";

import { fetchReviewsByPhysio } from "@/lib/firebase/reviews/read";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";

export default function ReviewList({ physioId }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!physioId) return;

    const fetchReviews = async () => {
      try {
        const data = await fetchReviewsByPhysio(physioId);
        setReviews(data);
      } catch (error) {
        console.log("Failed to load reviews:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [physioId]);

  if (loading) {
    return <p className="text-gray-500">Loading...</p>;
  }

  if (reviews.length === 0) {
    return <p className="text-gray-600">No reviews yet.</p>;
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Patient reviews</h3>
      {reviews.map((review) => (
        <div
          key={review.id}
          className="border rounded-lg p-4 bg-gray-50 shadow-sm"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-gray-500">
              {review.patientName}
            </span>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, idx) => (
                <FaStar
                  key={idx}
                  className={`${
                    idx < review.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Comment */}
          {review.comment && (
            <p className="text-gray-700 text-sm">{review.comment}</p>
          )}

          {/* Date */}
          <p className="text-xs text-gray-500 mt-2">
            {new Date(review.createdAt?.seconds * 1000).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
}
