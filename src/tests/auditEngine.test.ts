import { describe, it, expect } from "vitest";

import { calculateAudit } from "../utils/auditEngine";

describe("Audit Engine", () => {
  it("calculates total spend", () => {
    const result = calculateAudit([
      {
        id: 1,
        name: "ChatGPT",
        monthlyPrice: 20,
        seats: 2,
      },
    ]);

    expect(result.totalMonthlySpend).toBe(40);
  });

  it("calculates annual savings", () => {
    const result = calculateAudit([
      {
        id: 1,
        name: "Claude",
        monthlyPrice: 20,
        seats: 2,
      },
    ]);

    expect(result.annualSavings).toBeGreaterThan(0);
  });

  it("returns recommendations", () => {
    const result = calculateAudit([
      {
        id: 1,
        name: "Cursor",
        monthlyPrice: 20,
        seats: 2,
      },
    ]);

    expect(result.recommendations.length).toBeGreaterThan(0);
  });

  it("handles empty audits", () => {
    const result = calculateAudit([]);

    expect(result.totalMonthlySpend).toBe(0);
  });

  it("returns estimated savings", () => {
    const result = calculateAudit([
      {
        id: 1,
        name: "Gemini",
        monthlyPrice: 20,
        seats: 2,
      },
    ]);

    expect(result.estimatedSavings).toBeGreaterThanOrEqual(0);
  });
});