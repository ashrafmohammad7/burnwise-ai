import type { AuditResult } from "../types";

interface Props {
  result: AuditResult;
}

function AuditResults({ result }: Props) {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">
      <div className="rounded-3xl border border-green-500/20 bg-green-500/5 p-8">
        
        <h2 className="text-5xl font-bold text-white">
          AI Spend Optimization Report
        </h2>

        <p className="mt-4 text-lg text-gray-400">
          Burnwise AI analyzed your current
          AI tooling stack and identified
          opportunities to reduce recurring
          software expenses.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          
          <div className="rounded-2xl bg-black/40 p-6">
            <p className="text-sm text-gray-400">
              Monthly Spend
            </p>

            <h3 className="mt-3 text-5xl font-bold text-white">
              $
              {
                result.totalMonthlySpend
              }
            </h3>
          </div>

          <div className="rounded-2xl bg-black/40 p-6">
            <p className="text-sm text-gray-400">
              Estimated Savings
            </p>

            <h3 className="mt-3 text-5xl font-bold text-green-400">
              $
              {
                result.estimatedSavings
              }
            </h3>
          </div>

          <div className="rounded-2xl bg-black/40 p-6">
            <p className="text-sm text-gray-400">
              Annual Savings
            </p>

            <h3 className="mt-3 text-5xl font-bold text-green-400">
              $
              {result.annualSavings}
            </h3>
          </div>
        </div>

        <div className="mt-12">
          
          <h3 className="text-3xl font-semibold text-white">
            Optimization Recommendations
          </h3>

          <ul className="mt-6 space-y-4">
            {result.recommendations.map(
              (
                recommendation,
                index
              ) => (
                <li
                  key={index}
                  className="rounded-2xl border border-white/10 bg-black/30 p-5 text-lg leading-8 text-gray-300"
                >
                  {recommendation}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-black/30 p-6">
          
          <h3 className="text-3xl font-semibold text-white">
            AI Summary
          </h3>

          <p className="mt-5 text-lg leading-8 text-gray-300">
            Based on your current AI tooling
            stack, Burnwise AI identified
            multiple opportunities to reduce
            recurring software expenses while
            maintaining productivity. Your
            organization appears to have
            overlapping subscriptions across
            AI assistants and development
            tools. Consolidating plans,
            reducing underutilized premium
            seats, and switching to more
            cost-efficient pricing tiers may
            significantly improve budget
            efficiency without affecting team
            workflows.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-black/30 p-6">
          
          <h3 className="text-3xl font-semibold text-white">
            Save Your Audit Report
          </h3>

          <p className="mt-3 text-gray-400">
            Get this report delivered to your
            inbox and receive future AI spend
            optimization recommendations.
          </p>

          <div className="mt-6 flex flex-col gap-4 md:flex-row">
            
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-4 text-white"
            />

            <button className="rounded-xl bg-white px-8 py-4 font-semibold text-black">
              Save Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuditResults;