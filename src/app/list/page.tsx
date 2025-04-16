import MemeList from "@/components/MemeList";
import { getMemes } from "@/lib/get-memes";

export default async function ListPage() {
  const memes = await getMemes();

  return (
    <section className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold mb-6 text-background">
        List of memes (cards)
      </h1>
      <MemeList memes={memes} />
    </section>
  );
}
