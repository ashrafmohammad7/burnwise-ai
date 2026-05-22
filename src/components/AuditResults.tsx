import type { AuditResult } from "../types";

interface Props {
  result: AuditResult;
}

function AuditResults({ result }: Props) {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">
      <div className="rounded-3xl border border-green-500/20 bg-green-500/5 p-8">
        <h2 className="text-3xl font-bold text-white">
          Audit Results
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-black/40 p-5">
            <p className="text-sm text-gray-400">
              Monthly Spend
            </p>

            <h3 className="mt-2 text-3xl font-bold text-white">
              ${result.totalMonthlySpend}
            </h3>
          </div>

          <div className="rounded-2xl bg-black/40 p-5">
            <p className="text-sm text-gray-400">
              Estimated Savings
            </p>

            <h3 className="mt-2 text-3xl font-bold text-green-400">
              ${result.estimatedSavings}
            </h3>
          </div>

          <div className="rounded-2xl bg-black/40 p-5">
            <p className="text-sm text-gray-400">
              Annual Savings
            </p>

            <h3 className="mt-2 text-3xl font-bold text-green-400">
              ${result.annualSavings}
            </h3>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-white">
            Recommendations
          </h3>

          <ul className="mt-4 space-y-3">
            {result.recommendations.map(
              (recommendation, index) => (
                <li
                  key={index}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 text-gray-300"
                >
                  {recommendation}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AuditResults;