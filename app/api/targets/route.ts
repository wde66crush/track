import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function GET() {
  const targets = await prisma.target.findMany();
  console.log(targets)
  return targets;
}
