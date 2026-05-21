import type { Tool } from "../types";

interface Props {
  tool: Tool;
}

function ToolCard({ tool }: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10">
      <h3 className="text-lg font-semibold text-white">
        {tool.name}
      </h3>

      <p className="mt-2 text-sm text-gray-400">
        {tool.category}
      </p>

      <p className="mt-4 text-2xl font-bold text-white">
        ${tool.monthlyPrice}
        <span className="text-sm text-gray-400">
          /month
        </span>
      </p>
    </div>
  );
}

export default ToolCard;