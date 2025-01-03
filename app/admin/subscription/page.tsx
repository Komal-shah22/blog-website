// "use client";
// import SubsTableItem from "@/components/Addmincomponents/Subtableitem/page";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// interface Email {
//   _id: string;
//   email: string;
//   date: string;
// }

// const Page = () => {
//   const [emails, setEmails] = useState<Email[]>([]);

//   const fetchEmails = async () => {
//     try {
//       const response = await axios.get("/api/email");
//       setEmails(response.data.emails);
//     } catch (error) {
//       toast.error("Failed to fetch emails");
//     }
//   };

//   const deleteEmail = async (mongoId: string) => {
//     try {
//       const response = await axios.delete("/api/email", {
//         params: { id: mongoId },
//       });
//       if (response.data.success) {
//         toast.success(response.data.msg);
//         setEmails((prev) => prev.filter((email) => email._id !== mongoId));
//       } else {
//         toast.error("Failed to delete email");
//       }
//     } catch (error) {
//       toast.error("An error occurred while deleting the email");
//     }
//   };

//   useEffect(() => {
//     fetchEmails();
//   }, []);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
//         <h1 className="text-2xl font-bold mb-5 text-center">
//           All Subscriptions
//         </h1>
//         <div className="relative max-w-full h-[80vh] overflow-x-auto border border-gray-400 rounded-lg scrollbar-hide">
//           <table className="w-full text-sm text-gray-500">
//             <thead className="text-xs text-left text-gray-700 uppercase bg-gray-50">
//               <tr>
//                 <th scope="col" className="px-6 py-3">
//                   Email Subscription
//                 </th>
//                 <th scope="col" className="hidden sm:block px-6 py-3">
//                   Date
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {emails.length > 0 ? (
//                 emails.map((item) => (
//                   <SubsTableItem
//                     key={item._id}
//                     deleteEmail={deleteEmail}
//                     mongoId={item._id}
//                     email={item.email}
//                     date={item.date}
//                   />
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={3} className="px-6 py-4 text-center">
//                     No subscriptions found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;






"use client";
import SubsTableItem from "@/components/Addmincomponents/Subtableitem/page";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

interface Email {
  _id: string;
  email: string;
  date: string;
}

const Page = () => {
  const [emails, setEmails] = useState<Email[]>([]);

  // Fetch emails from the API
  const fetchEmails = async () => {
    // try {
    //   const response = await axios.get("/api/email");
    //   setEmails(response.data.emails);
    // } catch (error: any) {
    //   // Log the error for debugging purposes
    //   if (process.env.NODE_ENV === "development") {
    //     console.error("Fetch Emails Error: ", error.message || error);
    //   }
    //   toast.error("Failed to fetch emails");
    // }
  };

  // Delete email from the API
  const deleteEmail = async (mongoId: string) => {
    try {
      const response = await axios.delete("/api/email", {
        params: { id: mongoId },
      });
      if (response.data.success) {
        toast.success(response.data.msg);
        setEmails((prev) => prev.filter((email) => email._id !== mongoId));
      } else {
        toast.error("Failed to delete email");
      }
    } catch (error: any) {
      // Log the error for debugging purposes
      if (process.env.NODE_ENV === "development") {
        console.error("Delete Email Error: ", error.message || error);
      }
      toast.error("An error occurred while deleting the email");
    }
  };

  // Fetch emails on component mount
  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-5 text-center">
          All Subscriptions
        </h1>
        <div className="relative max-w-full h-[80vh] overflow-x-auto border border-gray-400 rounded-lg scrollbar-hide">
          <table className="w-full text-sm text-gray-500">
            <thead className="text-xs text-left text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Email Subscription
                </th>
                <th scope="col" className="hidden sm:block px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {emails.length > 0 ? (
                emails.map((item) => (
                  <SubsTableItem
                    key={item._id}
                    deleteEmail={deleteEmail}
                    mongoId={item._id}
                    email={item.email}
                    date={item.date}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="px-6 py-4 text-center">
                    No subscriptions found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;

