import { tools } from "../data/pricing";
import ToolCard from "./ToolCard";

function AuditForm() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-white">
          Your AI Stack
        </h2>

        <p className="mt-4 text-gray-400">
          Select the tools your team currently pays for.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  );
}

export default AuditForm;