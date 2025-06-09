import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const users = await prisma.user.findMany();
    return NextResponse.json(users, { status: 200 });
}

export async function POST(reg: NextRequest) {
    const data = await reg.json();
    const user = await prisma.user.create({ data });
    return NextResponse.json(user, { status: 201 });
}
