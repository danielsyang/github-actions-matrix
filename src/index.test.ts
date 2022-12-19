import { PrismaClient } from "@prisma/client";
import { createUser, deleteUser } from ".";

const prisma = new PrismaClient();

describe("index.ts spec", () => {
  afterEach(async () => {
    const deletedUsers = prisma.user.deleteMany();

    await prisma.$transaction([deletedUsers]);
  });

  it("validates createUser function", async () => {
    await createUser();

    const result = await prisma.user.findMany();

    expect(result.length).toBe(1);
  });

  it("validates deleteUser function", async () => {
    await createUser();
    const user = await prisma.user.findFirstOrThrow();

    await deleteUser(user.id);

    const result = await prisma.user.findMany();

    expect(result.length).toBe(0);
  });
});
