import { Meme } from "@/lib/types";

export async function updateMeme(meme: Meme): Promise<Meme> {
  try {
    const response = await fetch("/api/memes", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(meme),
    });

    if (!response.ok) {
      throw new Error("Failed to update meme");
    }

    return await response.json();
  } catch {
    throw new Error("An error occurred while updating the meme.");
  }
}
