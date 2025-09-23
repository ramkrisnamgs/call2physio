import {
  approvePhysio,
  rejectPhysio,
  suspendPhysio,
} from "@/lib/firebase/physio/write";
import toast from "react-hot-toast";

export default function PhysioTable({ physios, onView, refresh }) {
  const handleAction = async (uid, action) => {
    try {
      if (action === "approve") await approvePhysio(uid);
      if (action === "reject") await rejectPhysio(uid);
      if (action === "suspend") await suspendPhysio(uid);

      // toast.success("Physio " + action + "ed successfully");
      toast.success(`Physio ${action}ed successfully`);
      refresh();
    } catch (error) {
      console.log(error);
      toast.error("Failed to update physio", error.message);
    }
  };

  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Specialization</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {physios.map((p) => (
            <tr key={p.uid} className="bg-white border-b hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-900">
                {p.displayName || "N/A"}
              </td>
              <td className="px-6 py-4">{p.bloodGroup || "N/A"}</td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium
                  ${p.isApproved ? "bg-green-100 text-green-800" : 
                    p.rejected ? "bg-red-100 text-red-800" : 
                    "bg-yellow-100 text-yellow-800"}`}>
                  {p.isApproved ? "Approved" : p.rejected ? "Rejected" : "Pending"}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => onView(p)}
                    className="px-3 py-1.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors cursor-pointer">
                    View
                  </button>
                  <button 
                    onClick={() => handleAction(p.uid, "approve")}
                    className="px-3 py-1.5 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors cursor-pointer">
                    Approve
                  </button>
                  <button 
                    onClick={() => handleAction(p.uid, "reject")}
                    className="px-3 py-1.5 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors cursor-pointer">
                    Reject
                  </button>
                  <button 
                    onClick={() => handleAction(p.uid, "suspend")}
                    className="px-3 py-1.5 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors cursor-pointer">
                    Suspend
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
