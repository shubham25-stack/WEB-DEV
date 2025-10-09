import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Corrected query to find a user with id: 1
const user = await prisma.user.findUnique({
    where: {
        id: 1,
    },
});

console.log(user);
