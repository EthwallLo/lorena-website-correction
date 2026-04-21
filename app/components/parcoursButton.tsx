import Link from "next/link";

export default function ParcoursButton() {
  return (
    <Link
      href="/qui-suis-je"
      className="relative h-12 overflow-hidden rounded bg-white px-5 py-2.5 text-gray-800 font-medium transition-all 
      duration-300 hover:bg-gray-150 hover:ring-2 hover:ring-gray-300 hover:ring-offset-2 cursor-pointer inline-flex items-center"
    >
      <span className="relative">Découvrir mon parcours</span>
    </Link>
  );
}
