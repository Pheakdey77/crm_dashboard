import { NextResponse } from "next/server";

import product from "@/data/product.json";
export async function GET(context: any) {
  const { param } = context;
  return NextResponse.json(param);
  const data = product.filter((x) => param.id === x.id);

  return NextResponse.json({
    data
  });
}

export async function POST(request: Request) {
  const data = await request.json();

  return NextResponse.json(data);
}
