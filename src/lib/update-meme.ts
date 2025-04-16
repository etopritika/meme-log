import { Meme } from "@/lib/types";

export async function updateMeme(meme: Meme): Promise<Meme> {
  const res = await fetch("/api/memes", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(meme),
  });

  if (!res.ok) {
    throw new Error("Failed to update meme");
  }

  return res.json();
}
