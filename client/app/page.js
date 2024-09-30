import Image from "next/image";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <div className="flex max-w-screen-xl mx-auto min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Hero />
    </div>
  );
}
