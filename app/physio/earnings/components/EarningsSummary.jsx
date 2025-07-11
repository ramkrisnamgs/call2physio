"use client";

export default function EarningsSummary({ stats }) {
  const summaryCards = [
    { label: "Total Earnings", value: `₹${stats.total}` },
    { label: "This Month", value: `₹${stats.thisMonth}` },
    { label: "Paid Sessions", value: `₹${stats.paidSessions}` },
    { label: "Unpaid Sessions", value: `₹${stats.unpaidSessions}` },
  ];

  return (
     <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
       {summaryCards.map((card) => {
         <div
           key={card.label}
           className="bg-white rounded-lg shadow p-4 text-center"
         >
           <h4 className="text-sm text-gray-500">{card.label}</h4>
           <p className="text-xl font-semibold text-gray-800">{card.value}</p>
         </div>;
       })}
     </div>
   );
}


