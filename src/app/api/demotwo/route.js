import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// export async function POST(req, res) {
//     try {
//         const prisma = new PrismaClient({
//             log: ["query", "info", "warn", "error"],
//         });

//         const createUser = await prisma.user.create({
//             data: { email: "123@gmail.com", password: "123" }
//         });


//         const deleteComments = await prisma.comment.delete({
//             where: { id: 1 }
//         });

//         const result = await prisma.$transaction([createUser, deleteComments])



//         return NextResponse.json({ status: "success", data: result });
//     } catch (e) {
//         return NextResponse.json({ status: "failed", data: e });
//     }
// }


// export async function POST(req, res) {
//     try {
//         const prisma = new PrismaClient({
//             log: ["query", "info", "warn", "error"],
//         });

//         const createUser = await prisma.user.create({
//             data: { email: "123@gmail.com", password: "123" }
//         });


//         const deleteComments = await prisma.comment.delete({
//             where: { id: 1 }
//         });

//         const result = await prisma.$transaction([createUser, deleteComments])



//         return NextResponse.json({ status: "success", data: result });
//     } catch (e) {
//         return NextResponse.json({ status: "failed", data: e });
//     }
// }




// export async function POST(req, res) {
//     try {
//         const prisma = new PrismaClient({
//             log: ["query", "info", "warn", "error"],
//         });


//         const startTime = Date.now()

//         const result = await prisma.Employee.findMany({

//         });
//         const excTime = (Date.now() - startTime)


//         return NextResponse.json({ excTime: excTime, status: "success", data: result });
//     } catch (e) {
//         return NextResponse.json({ status: "failed", data: e });
//     }
// }


// export async function POST(req, res) {
//     try {
//         const prisma = new PrismaClient({
//             log: ["query", "info", "warn", "error"],
//         });


//         const startTime = Date.now()

//         const result = await prisma.Employee.findMany({

//         });
//         const excTime = (Date.now() - startTime)


//         return NextResponse.json({excTime:excTime, status: "success", data: result });
//     } catch (e) {
//         return NextResponse.json({ status: "failed", data: e });
//     }
// }

// export async function POST(req, res) {
//     try {

//         const prisma = new PrismaClient();

//         const result = await prisma.Employee.findMany ({
//         //   cursor:{id:1}, not work
//         skip:2,
//           take:2

//         });

//         return NextResponse.json({ status: "success", data: result });
//     } catch (e) {
//         return NextResponse.json({ status: "failed", data: e });
//     }
// }

// export async function POST(req, res) {
//     try {

//         const prisma = new PrismaClient();

//         const result = await prisma.Employee.groupBy ({
//           by:["city"],
//           _sum:{salary:true},
//         });
//         // const result = await prisma.Employee.aggregate ({
//         //    _count:{id:true},
//         //    _sum:{salary:true},
//         //    _avg:{salary:true},
//         //    _min:{salary:true},
//         //    _max:{salary:true},
//         // });

//         return NextResponse.json({ status: "success", data: result });
//     } catch (e) {
//         return NextResponse.json({ status: "failed", data: e });
//     }
// }

// export async function POST(req, res) {
//     try {

//         const prisma = new PrismaClient();

//         const result = await prisma.user.findMany ({
//              where:{email:"123b@gmail.com"},
//              include: {
//                 Profile: true,
//                 post: true,
//                 comment: true,
//               },
//         });

//         return NextResponse.json({ status: "success", data: result });
//     } catch (e) {
//         return NextResponse.json({ status: "failed", data: e });
//     }
// }

// export async function POST(req, res) {
//     try {

//         const prisma = new PrismaClient();

//         const result = await prisma.user.findMany ({

//              include: {
//                 Profile: true,
//                 post: true,
//                 comment: true,
//               },
//         });

//         return NextResponse.json({ status: "success", data: result });
//     } catch (e) {
//         return NextResponse.json({ status: "failed", data: e });
//     }
// }

// export async function POST(req, res) {
//     try {

//         const prisma = new PrismaClient();

//         const result = await prisma.user.findUnique ({
//                //where:{id:5},
//                where:{email: "123a@gmail.com"},

//         });

//         return NextResponse.json({ status: "success", data: result });
//     } catch (e) {
//         return NextResponse.json({ status: "failed", data: e });
//     }
// }

// export async function POST(req, res) {
//     try {

//         const prisma = new PrismaClient();

//         const result = await prisma.Employee.findFirst({
//             orderBy: { id: "desc" }
//         });
//         // const result = await prisma.Employee.findMany({
//         //     orderBy: { salary: "asc" },
//         //     skip:1,
//         //     take:2
//         //     // orderBy: { id: "asc" }
//         //     // orderBy: { id: "desc" }
//         // });

//         return NextResponse.json({ status: "success", data: result });
//     } catch (e) {
//         return NextResponse.json({ status: "failed", data: e });
//     }
// }

// export async function POST(req, res) {
//     try {

//         const prisma = new PrismaClient();

//         const result = await prisma.post.findMany({
//             where: { description:{contains:"lolase"}},

//         });

//         return NextResponse.json({ status: "success", data: result });
//     } catch (e) {
//         return NextResponse.json({ status: "failed", data: e });
//     }
// }

// export async function POST(req, res) {
//     try {

//         const prisma = new PrismaClient();

//         const result = await prisma.Employee.findMany({
//             where: { name: "Smith" },
//             select: { id: true, name: true, desigantion:false,city:true}
//         });

//         return NextResponse.json({ status: "success", data: result });
//     } catch (e) {
//         return NextResponse.json({ status: "failed", data: e });
//     }
// }

// export async function POST(req, res) {
//   try {
//     const { searchParams } = new URL(req.url);

//     const id = parseInt(searchParams.get("id"));

//     const prisma = new PrismaClient();

//     const result = await prisma.Employee.delete({
//       where: { id },
//     });

//     return NextResponse.json({ status: "success", data: result });
//   } catch (e) {
//     return NextResponse.json({ status: "failed", data: e });
//   }
// }

// export async function POST(req, res) {
//     try {
//         const { searchParams } = new URL(req.url);

//         const reqBody = await req.json();

//         const id = parseInt(searchParams.get("id"));

//         const prisma = new PrismaClient()

//         const result = await prisma.Employee.update({
//             where: { id },
//             data: reqBody
//         })

//         return NextResponse.json({ status: "success", data: result });
//     } catch (e) {
//         return NextResponse.json({ status: "failed", data: e });
//     }
// }

// export async function POST(req, res) {
//     try {
//         // const reqBody = await req.json()
//         const prisma = new PrismaClient();

//         const result = await prisma.user.create({
//             data: {
//                 email: "123@gm402ail.com",
//                 password: "12453",
//                 Profile: {
//                     create: {
//                         fname: "demo1",
//                         lname: "bB4",
//                         city: "CCjhk",
//                         postcode: "0k054",
//                     },
//                 },
//                 post: {
//                     create: {
//                         title: "jabe",
//                         description: " Ipsum has been the industry's lolase standard dummy text ever since the",
//                     },
//                 },
//             },
//         });

//         return NextResponse.json({ status: "success", data: result });
//     } catch (e) {
//         return NextResponse.json({ status: "faild", data: e });
//     }
// }

// export async function POST(req, res) {
//     try {
//         // const reqBody = await req.json()
//         const prisma = new PrismaClient()

//         let result = await prisma.Employee.createMany({
//             data: [
//                 { name: "John Smith", desigantion: "Software Engineer", city: "Dhaka", salary: "10000" },
//                 { name: "Alice Johnson", desigantion: "Data Analyst", city: "Chittagong", salary: "8000" },
//                 { name: "Michael Brown", desigantion: "Project Manager", city: "Sylhet", salary: "12000" },
//                 { name: "Emily Davis", desigantion: "UI/UX Designer", city: "Rajshahi", salary: "9500" },
//                 { name: "David Wilson", desigantion: "Marketing Specialist", city: "Khulna", salary: "8500" }
//             ]
//         })

//         return NextResponse.json({ status: "success", data: result })

//     }
//     catch (e) {

//         return NextResponse.json({ status: "faild", data: e })

//     }
// }

// export async function POST(req, res) {
//     try {
//         const reqBody = await req.json()
//         const prisma = new PrismaClient()

//         let result = await prisma.Employee.create({
//             data: reqBody
//         })

//         return NextResponse.json({ status: "success", data: result })

//     }
//     catch (e) {

//         return NextResponse.json({ status: "faild", data: e })

//     }
// }
