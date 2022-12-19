import { PrismaClient, User } from "@prisma/client";
import { createUser, deleteUser } from ".";

const prisma = new PrismaClient();

describe("deleteUser spec", () => {
  let user: User;
  beforeEach(async () => {
    user = await createUser();
  });

  it("validates deleteUser function", async () => {
    await deleteUser(user.id);

    const result = await prisma.user.findMany();

    expect(result.length).toBe(0);
  });
});
