import type { AuditResult, SelectedTool } from "../types";

export function calculateAudit(
  selectedTools: SelectedTool[]
): AuditResult {
  const totalMonthlySpend = selectedTools.reduce(
    (sum, tool) =>
      sum + tool.monthlyPrice * tool.seats,
    0
  );

  let estimatedSavings = 0;

  const recommendations: string[] = [];

  selectedTools.forEach((tool) => {
    if (tool.seats <= 2 && tool.monthlyPrice >= 20) {
      estimatedSavings += 10;

      recommendations.push(
        `${tool.name}: Consider downgrading to a cheaper plan for small teams.`
      );
    }

    if (tool.name.includes("ChatGPT")) {
      recommendations.push(
        "Evaluate whether Claude or Gemini can replace some ChatGPT usage."
      );
    }
  });

  return {
    totalMonthlySpend,
    estimatedSavings,
    annualSavings: estimatedSavings * 12,
    recommendations,
  };
}