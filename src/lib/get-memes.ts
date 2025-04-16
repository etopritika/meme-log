"use server";
import { Meme } from "@/lib/types";

export async function getMemes(): Promise<Meme[]> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

  try {
    const res = await fetch(`${baseUrl}/api/memes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch memes: ${res.statusText}`);
    }

    const data: Meme[] = await res.json();
    return data;
  } catch {
    throw new Error("An error occurred while fetching memes.");
  }
}
