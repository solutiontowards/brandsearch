"use client";

import { useRouter } from "next/navigation";
import AIToolCard from "./AIToolCard";
import { aiTools } from "./data";

export default function AITools() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 gap-[25px] lg:grid-cols-2">
      {aiTools.map((tool) => (
        <AIToolCard
          key={tool.id}
          image={tool.images}
          title={tool.title}
          description={tool.description}
          onClick={() => router.push(`/ai-tools/${tool.id}`)}
        />
      ))}
    </div>
  );
}