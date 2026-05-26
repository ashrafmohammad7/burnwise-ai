import { useEffect, useState } from "react";

import { tools } from "../data/pricing";
import type { SelectedTool } from "../types";

import ToolCard from "./ToolCard";
import AuditResults from "./AuditResults";
import AuditControls from "./AuditControls";

import { calculateAudit } from "../utils/auditEngine";

type AuditResult = {
  totalMonthlySpend: number;
  estimatedSavings: number;
  annualSavings: number;
  recommendations: string[];
};

function AuditForm() {
  const savedData =
    typeof window !== "undefined"
      ? localStorage.getItem("burnwise-audit")
      : null;

  const parsedData = savedData
    ? JSON.parse(savedData)
    : null;

  const [selectedTools, setSelectedTools] =
    useState<SelectedTool[]>([]);

  const [teamSize, setTeamSize] =
    useState<number>(
      parsedData?.teamSize || 5
    );

  const [monthlyBudget, setMonthlyBudget] =
    useState<number>(
      parsedData?.monthlyBudget || 200
    );

  const [useCase, setUseCase] =
    useState<string>(
      parsedData?.useCase || "Development"
    );

  const [result, setResult] =
    useState<AuditResult | null>(null);

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    localStorage.setItem(
      "burnwise-audit",
      JSON.stringify({
        teamSize,
        monthlyBudget,
        useCase,
      })
    );
  }, [teamSize, monthlyBudget, useCase]);

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

    const newTool: SelectedTool = {
      id: selectedTools.length + 1,
      name,
      monthlyPrice,
      seats: 2,
    };

    setSelectedTools([
      ...selectedTools,
      newTool,
    ]);
  }

  function runAudit() {
    setLoading(true);

    setTimeout(() => {
      const audit = calculateAudit(
        selectedTools
      );

      setResult(audit);

      const auditId =
        crypto.randomUUID();

      window.history.pushState(
        {},
        "",
        `/audit/${auditId}`
      );

      setLoading(false);
    }, 1200);
  }

  function resetAudit() {
    setSelectedTools([]);

    setResult(null);

    localStorage.removeItem(
      "burnwise-audit"
    );
  }

  return (
    <>
      <AuditControls
        teamSize={teamSize}
        setTeamSize={setTeamSize}
        monthlyBudget={monthlyBudget}
        setMonthlyBudget={setMonthlyBudget}
        useCase={useCase}
        setUseCase={setUseCase}
      />

      <section
        id="features"
        className="mx-auto max-w-6xl px-6 pb-24"
      >
        <div className="mb-10 text-center">
          <h2 className="text-5xl font-bold text-white">
            Your AI Stack
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            Select the AI tools your team
            currently uses across engineering,
            research, writing, and
            collaboration workflows.
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
                    selectedTool.name ===
                    tool.name
                )}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4">
          <button
            onClick={runAudit}
            className="rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-black transition hover:scale-105"
          >
            {loading
              ? "Generating Report..."
              : "Run AI Audit"}
          </button>

          <button
            onClick={resetAudit}
            className="rounded-xl border border-gray-700 bg-transparent px-6 py-3 text-white transition hover:bg-gray-900"
          >
            Reset Audit
          </button>
        </div>
      </section>

      {result && (
        <AuditResults result={result} />
      )}
    </>
  );
}

export default AuditForm;