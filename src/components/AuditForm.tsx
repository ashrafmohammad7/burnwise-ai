import { useEffect, useState } from "react";

import { tools } from "../data/pricing";
import type { SelectedTool } from "../types";

import ToolCard from "./ToolCard";
import AuditResults from "./AuditResults";

import { calculateAudit } from "../utils/auditEngine";

type AuditResult = {
  totalMonthlySpend: number;
  estimatedSavings: number;
  annualSavings: number;
  recommendations: string[];
};

function AuditForm() {
  const [selectedTools, setSelectedTools] =
    useState<SelectedTool[]>([]);

  const [result, setResult] =
    useState<AuditResult | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [teamSize, setTeamSize] =
    useState(5);

  const [monthlyBudget, setMonthlyBudget] =
    useState(200);

  const [useCase, setUseCase] =
    useState("Development");

  useEffect(() => {
    const savedData = localStorage.getItem(
      "burnwise-audit"
    );

    if (savedData) {
      const parsed = JSON.parse(savedData);

      setTeamSize(parsed.teamSize || 5);

      setMonthlyBudget(
        parsed.monthlyBudget || 200
      );

      setUseCase(
        parsed.useCase || "Development"
      );
    }
  }, []);

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

    setTeamSize(5);

    setMonthlyBudget(200);

    setUseCase("Development");
  }

  return (
    <>
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

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-black p-6">
            <label className="text-sm text-zinc-400">
              Team Size
            </label>

            <input
              type="number"
              value={teamSize}
              onChange={(e) =>
                setTeamSize(
                  Number(e.target.value)
                )
              }
              className="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white"
            />
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-black p-6">
            <label className="text-sm text-zinc-400">
              Monthly Budget
            </label>

            <input
              type="number"
              value={monthlyBudget}
              onChange={(e) =>
                setMonthlyBudget(
                  Number(e.target.value)
                )
              }
              className="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white"
            />
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-black p-6">
            <label className="text-sm text-zinc-400">
              Primary Use Case
            </label>

            <select
              value={useCase}
              onChange={(e) =>
                setUseCase(
                  e.target.value
                )
              }
              className="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white"
            >
              <option>
                Development
              </option>

              <option>
                Content Writing
              </option>

              <option>
                Research
              </option>

              <option>
                Design
              </option>

              <option>
                Marketing
              </option>
            </select>
          </div>
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