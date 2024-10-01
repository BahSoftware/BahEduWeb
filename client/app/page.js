import Image from "next/image";
import Hero from "@/components/Hero";
import Features from "@/components/Features";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 max-w-screen-xl mx-auto min-h-screen">
      <Hero />
      {/* Yatay çizgi */}
      <hr className="border-t-1 border-gray-400 my-4" />
      <Features />
    </div>
  );
}
