import MemeCard from "./MemeCard";
import { Meme } from "@/lib/types";

export default function MemeList({ memes }: { memes: Meme[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {memes.map((meme) => (
        <li key={meme.id}>
          <MemeCard meme={meme} />
        </li>
      ))}
    </ul>
  );
}
