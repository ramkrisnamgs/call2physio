import { Button } from "@heroui/react";

export default function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  filesNames,
  isDeleting,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md space-y-4">
        <h4 className="text-xl font-bold text-gray-700">Confirm Deletion</h4>
        <p>
          Are you sure you want to delete your account? The following documents
          will also be deleted permanently:{" "}
        </p>
        <ul className="text-sm text-gray-600 list-disc ml-6 max-h-40 overflow-y-auto">
          {Array.isArray(filesNames) && filesNames.length > 0 ? (
            filesNames.map((name) => <li key={name}>{name}</li>)
          ) : (
            <li>No files to display</li>
          )}
        </ul>

        <div className="flex justify-end gap-3">
          <Button
            onPress={onClose}
            isLoading={isDeleting}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded"
          >
            Cancel
          </Button>
          <Button
            onPress={onConfirm}
            isLoading={isDeleting}
            className="bg-red-600 text-white px-4 py-2 rounded cursor-pointer"
          >
            Confirm Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
