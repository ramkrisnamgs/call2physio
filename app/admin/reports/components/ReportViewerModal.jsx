"use client";

export default function ReportViewerModal({ report, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl h-[80vh] relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          ✕
        </button>
        <div className="p-4 h-full">
          <h2 className="text-lg font-semibold mb-4">
            {report.fileName} (by {report.patientName || "Unknown"})
          </h2>
          <iframe
            src={report.url}
            className="w-full h-full rounded border"
            title="Report Viewer"
          />
        </div>
      </div>
    </div>
  );
}
