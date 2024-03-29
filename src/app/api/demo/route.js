import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// export async function POST(req, res) {
//         try {

//             const prisma = new PrismaClient();

//             const result = await prisma.Employee.findMany ({
//               cursor:{id:6}, 
//             //skip:2,
//               take:2

//             });

//             return NextResponse.json({ status: "success", data: result });
//         } catch (e) {
//             return NextResponse.json({ status: "failed", data: e });
//         }
//     }



// export async function POST(req, res) {
//     try {

//         const prisma = new PrismaClient();

//         const result = await prisma.user.findUnique({
//             //  where: { id: 5 },
//             where:{email: "123a@gmail.com"},

//         });

//         return NextResponse.json({ status: "success", data: result });
//     } catch (e) {
//         return NextResponse.json({ status: "failed", data: e });
//     }
// }




