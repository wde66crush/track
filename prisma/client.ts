import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const targets = await prisma.target.findMany()
  const users = await prisma.user.findMany()
  const tags = await prisma.tag.findMany()
  const target = await prisma.target.findUnique({
    where: {
      id: 1,
    },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })