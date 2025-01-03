// import EmailModel from "@/lib/config/models/emailmodel";
// import { NextResponse } from "next/server";
// import ConnectDB from "@/lib/config/db"; // Assuming you have a database connection function

// Utility function to ensure a database connection
// const ensureDBConnection = async () => {
//   try {
//     await ConnectDB();
//   } catch (error) {
//     console.error("Database connection failed:", error.message);
//     throw new Error("Failed to connect to the database");
//   }
// };

// // Utility function for consistent responses
// const createResponse = (success: boolean, msg: string, data?: any, error?: string) => {
//   const response = { success, msg, data, error };
//   return NextResponse.json(success ? response : { ...response, data: undefined });
// };

// // Handle POST request: Add email subscription
// export async function POST(request: Request) {
//   try {
//     await ensureDBConnection();

//     const formData = await request.formData();
//     const email = formData.get("email");

//     if (!email || typeof email !== "string") {
//       return createResponse(false, "Invalid email address", undefined, "ValidationError");
//     }

//     const emailData = { email };
//     await EmailModel.create(emailData);

//     return createResponse(true, "Email Subscribed");
//   } catch (error) {
//     return createResponse(false, "Error subscribing email", undefined, error.message);
//   }
// }

// // Handle GET request: Retrieve all subscriptions
// export async function GET() {
//   try {
//     await ensureDBConnection();

//     const emails = await EmailModel.find({});
//     return createResponse(true, "Emails fetched successfully", emails);
//   } catch (error) {
//     return createResponse(false, "Error fetching emails", undefined, error.message);
//   }
// }

// // Handle DELETE request: Remove email subscription
// export async function DELETE(request: Request) {
//   try {
//     await ensureDBConnection();

//     const id = request.nextUrl.searchParams.get("id");
//     if (!id) {
//       return createResponse(false, "ID is required", undefined, "ValidationError");
//     }

//     const deletedEmail = await EmailModel.findByIdAndDelete(id);
//     if (!deletedEmail) {
//       return createResponse(false, "Email not found", undefined, "NotFoundError");
//     }

//     return createResponse(true, "Email Deleted");
//   } catch (error) {
//     return createResponse(false, "Error deleting email", undefined, error.message);
//   }
// }
