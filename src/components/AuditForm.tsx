import { useState } from "react";

import { tools } from "../data/pricing";
import type { SelectedTool } from "../types";

import ToolCard from "./ToolCard";
import AuditResults from "./AuditResults";

import { calculateAudit } from "../utils/auditEngine";

function AuditForm() {
  const [selectedTools, setSelectedTools] = useState<
    SelectedTool[]
  >([]);

  const [result, setResult] = useState<any>(null);

  function handleToolSelect(
    name: string,
    monthlyPrice: number
  ) {
    const exists = selectedTools.find(
      (tool) => tool.name === name
    );

    if (exists) {
      setSelectedTools(
        selectedTools.filter(
          (tool) => tool.name !== name
        )
      );

      return;
    }

    setSelectedTools([
      ...selectedTools,
      {
        id: Date.now(),
        name,
        monthlyPrice,
        seats: 2,
      },
    ]);
  }

  function runAudit() {
    const audit = calculateAudit(selectedTools);

    setResult(audit);
  }

  return (
    <>
      <section
        id="pricing"
        className="mx-auto max-w-6xl px-6 pb-24"
      >
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
            <div
              key={tool.id}
              onClick={() =>
                handleToolSelect(
                  tool.name,
                  tool.monthlyPrice
                )
              }
              className="cursor-pointer"
            >
              <ToolCard
  tool={tool}
  selected={selectedTools.some(
    (selectedTool) =>
      selectedTool.name === tool.name
  )}
/>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            onClick={runAudit}
            className="rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-black transition hover:scale-105"
          >
            Run AI Audit
          </button>
        </div>
      </section>

      {result && <AuditResults result={result} />}
    </>
  );
}

export default AuditForm;