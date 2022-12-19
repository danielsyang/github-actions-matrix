import { PrismaClient } from "@prisma/client";
import { createUser, deleteUser } from ".";

const prisma = new PrismaClient();

describe("createUser spec", () => {
  afterAll(async () => {
    const deletedUsers = prisma.user.deleteMany();

    await prisma.$transaction([deletedUsers]);
  });

  it("validates createUser function", async () => {
    await createUser();

    const result = await prisma.user.findMany();

    expect(result.length).toBe(1);
  });
});
