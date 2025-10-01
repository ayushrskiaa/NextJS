import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;



// import mongoose , {Schema, Model} from "mongoose";
// mongoose.connect("");

// const userSchema= new Schema({
//     username: String,
//     password: String
// })

// export const UserModel = mongoose.model("user", userSchema);