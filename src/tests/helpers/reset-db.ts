
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async () => {
  await prisma.$transaction([
    prisma.request.deleteMany(),
  ])
}
// transaction is used because: if there are multiple tables,
// we want all to be deleted or none to be deleted