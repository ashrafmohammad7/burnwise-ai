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
    if (
      tool.name.includes("ChatGPT") &&
      tool.seats <= 3
    ) {
      estimatedSavings += 12;

      recommendations.push(
        "Your team may be overpaying for separate ChatGPT Plus subscriptions. Consolidating into ChatGPT Team could simplify billing and reduce monthly costs."
      );
    }

    if (
      tool.name.includes("Cursor") &&
      tool.seats <= 2
    ) {
      estimatedSavings += 8;

      recommendations.push(
        "Cursor Pro appears underutilized for a small team. Reducing unused premium seats may lower recurring expenses."
      );
    }

    if (
      tool.name.includes("Claude") &&
      tool.seats <= 3
    ) {
      estimatedSavings += 10;

      recommendations.push(
        "Claude Pro usage overlaps with other AI assistants in your stack. Consider limiting duplicate subscriptions for non-daily users."
      );
    }

    if (
      tool.name.includes("Gemini")
    ) {
      estimatedSavings += 5;

      recommendations.push(
        "Gemini Advanced may provide overlapping functionality with ChatGPT or Claude. Reviewing tool redundancy could improve budget efficiency."
      );
    }

    if (
      tool.name.includes("Copilot")
    ) {
      estimatedSavings += 6;

      recommendations.push(
        "GitHub Copilot usage is typically highest in larger engineering teams. Smaller teams may benefit from fewer active licenses."
      );
    }
  });

  return {
    totalMonthlySpend,
    estimatedSavings,
    annualSavings:
      estimatedSavings * 12,
    recommendations,
  };
}