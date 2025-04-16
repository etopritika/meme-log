import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { Meme } from "@/lib/types";

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

export async function PATCH(req: Request) {
  try {
    const updatedMeme: Meme = await req.json();

    const data = fs.readFileSync(memesFilePath, "utf-8");
    const memes = JSON.parse(data);

    const index = memes.findIndex((m: Meme) => m.id === updatedMeme.id);

    if (index === -1) {
      return NextResponse.json({ error: "Meme not found" }, { status: 404 });
    }

    memes[index] = { ...memes[index], ...updatedMeme };

    fs.writeFileSync(memesFilePath, JSON.stringify(memes, null, 2));

    return NextResponse.json(memes[index]);
  } catch {
    return NextResponse.json(
      { error: "Failed to update meme" },
      { status: 500 }
    );
  }
}
