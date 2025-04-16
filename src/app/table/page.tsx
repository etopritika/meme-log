import MemeTable from "@/components/MemeTable";
import { getMemes } from "@/lib/get-memes";

export default async function TablePage() {
  const memes = await getMemes();

  return (
    <section className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold mb-6 text-background">
        List of memes (table)
      </h1>
      <MemeTable memes={memes} />
    </section>
  );
}
