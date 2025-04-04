import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Prisma.Users.delete({ //either update insert and many more


// })

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, firstName:string,lastName:string {
}: UpdateParams) {
    const res = await prisma.user.update({
        where: { email: username },
        data: {
            firstName,
            lastName
        }
    })
}
