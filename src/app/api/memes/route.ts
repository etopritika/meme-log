import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

const memesFilePath = path.join(process.cwd(), "src", "data", "memes.json");

export async function GET() {
  try {
    const data = fs.readFileSync(memesFilePath, "utf-8");
    const memes = JSON.parse(data);
    return NextResponse.json(memes);
  } catch {
    return NextResponse.json(
      { error: "Failed to read memes" },
      { status: 500 }
    );
  }
}
