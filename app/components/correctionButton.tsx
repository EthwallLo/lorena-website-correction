import Link from "next/link";

export default function CorrectionButton() {
  return (
    <Link
      href="/correction"
      className="mt-4 inline-flex px-6 py-3 bg-[#B76E79] text-white rounded-md hover:bg-[#a4626c] transition-colors duration-300"
    >
      En savoir plus
    </Link>
  );
}
