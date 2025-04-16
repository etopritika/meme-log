import { Meme } from "@/lib/types";

export async function getMemes(): Promise<Meme[]> {
  const res = await fetch(
    typeof window === "undefined"
      ? `${
          process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"
        }/api/memes`
      : "/api/memes"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch memes");
  }

  return res.json();
}
