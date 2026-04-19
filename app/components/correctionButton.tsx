"use client";

import { useRouter } from "next/navigation";

export default function CorrectionButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/correction")}
      className="mt-4 px-6 py-3 bg-[#B76E79] text-white rounded-md hover:bg-[#a4626c] transition-colors duration-300"
    >
      En savoir plus
    </button>
  );
}