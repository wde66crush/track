import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

interface Target {
  id: number;
  name: string;
  description: string;
}

async function getTargets() {
  const targets = await prisma.target.findMany()
  return targets;
}

export default async function page() {
  console.log("looking for targets")
 const targets = await getTargets();
  return (
    <div>targets</div>
  )
}