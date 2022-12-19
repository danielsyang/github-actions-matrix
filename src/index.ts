import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const {
  internet: { email, userName },
} = faker;

const prisma = new PrismaClient();

export async function createUser() {
  return await prisma.user.create({
    data: { email: email(), name: userName() },
  });
}

export async function deleteUser(id: string) {
  await prisma.user.delete({ where: { id } });
}

export async function updateUser(email: string) {
  await prisma.user.update({ data: { id: "pr" }, where: { email } });
}
