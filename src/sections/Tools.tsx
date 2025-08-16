import { useState } from "react";

export default function Tools() {
  const tools = [
    { name: "Custom Brackets", description: "High-quality CNC machined brackets for industrial use." },
    { name: "Steel Adapters", description: "Durable steel adapters suitable for heavy-duty applications." },
    { name: "Motor Mounts", description: "Precision mounts designed for various motor types." },
    { name: "Enclosures", description: "Protective enclosures for sensitive electronics and machinery." },
    { name: "Tool 5", description: "Description for tool 5." },
    { name: "Tool 6", description: "Description for tool 6." },
    { name: "Tool 7", description: "Description for tool 7." },
    { name: "Tool 8", description: "Description for tool 8." },
    { name: "Tool 9", description: "Description for tool 9." },
    { name: "Tool 10", description: "Description for tool 10." },
    { name: "Tool 11", description: "Description for tool 11." },
    { name: "Tool 12", description: "Description for tool 12." },
    { name: "Tool 13", description: "Description for tool 13." },
    { name: "Tool 14", description: "Description for tool 14." },
    { name: "Tool 15", description: "Description for tool 15." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleTool = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="tools" className="min-h-screen bg-black text-white py-10 px-6">
      <h1 className="text-3xl font-bold mb-8">Tools</h1>
      <div className="divide-y divide-gray-700">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="py-4 cursor-pointer"
            onClick={() => toggleTool(index)}
          >
            <div className="flex justify-between items-center">
              <span className="text-lg">{tool.name}</span>
              <span className="text-gray-400">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-300 text-sm transition-all duration-300">
                {tool.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
