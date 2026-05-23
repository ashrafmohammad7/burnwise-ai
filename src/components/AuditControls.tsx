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
    <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-3 gap-6">
      
      <div className="bg-black border border-zinc-800 rounded-2xl p-6">
        <label className="text-zinc-400 text-sm">Team Size</label>
        <input
          type="number"
          value={teamSize}
          onChange={(e) => setTeamSize(Number(e.target.value))}
          className="w-full mt-2 bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white"
        />
      </div>

      <div className="bg-black border border-zinc-800 rounded-2xl p-6">
        <label className="text-zinc-400 text-sm">Monthly Budget</label>
        <input
          type="number"
          value={monthlyBudget}
          onChange={(e) => setMonthlyBudget(Number(e.target.value))}
          className="w-full mt-2 bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white"
        />
      </div>

      <div className="bg-black border border-zinc-800 rounded-2xl p-6">
        <label className="text-zinc-400 text-sm">Primary Use Case</label>
        <select
          value={useCase}
          onChange={(e) => setUseCase(e.target.value)}
          className="w-full mt-2 bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white"
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