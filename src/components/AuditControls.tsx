type Props = {
  teamSize: number;
  setTeamSize: (value: number) => void;
  monthlyBudget: number;
  setMonthlyBudget: (value: number) => void;
  useCase: string;
  setUseCase: (value: string) => void;
};

const AuditControls = ({
  teamSize,
  setTeamSize,
  monthlyBudget,
  setMonthlyBudget,
  useCase,
  setUseCase,
}: Props) => {
  return (
    <div className="mx-auto mt-12 grid max-w-5xl gap-6 px-6 md:grid-cols-3">

      <div className="rounded-2xl border border-zinc-800 bg-black p-6">
        <label className="text-sm text-zinc-400">
          Team Size
        </label>

        <input
          type="number"
          value={teamSize}
          onChange={(e) =>
            setTeamSize(Number(e.target.value))
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
            setMonthlyBudget(Number(e.target.value))
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
            setUseCase(e.target.value)
          }
          className="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white"
        >
          <option>Development</option>
          <option>Content Writing</option>
          <option>Research</option>
          <option>Design</option>
          <option>Marketing</option>
        </select>
      </div>

    </div>
  );
};

export default AuditControls;