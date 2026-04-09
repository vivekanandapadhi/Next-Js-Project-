import { db } from "@/config/db";
import { eq } from "drizzle-orm";
import { currentUser, User } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { UserTable } from "@/config/schema";

export async function POST(req: Request) {
  const user = await currentUser();

  if (!user || !user.primaryEmailAddress?.emailAddress) {
    return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
  }

  const users = await db.select().from(UserTable)
  .where(eq(UserTable.email, user?.primaryEmailAddress?.emailAddress))

  if (users.length === 0) {
    const data ={
        name: user?.fullName??'',
        email: user?.primaryEmailAddress?.emailAddress as string,
    }
    const result = await db
      .insert(UserTable)
      .values({ ...data })
      .returning();
    return NextResponse.json(result[0] ?? {})
  }

  return NextResponse.json(users[0] ?? {})
}
