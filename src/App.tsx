import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AuditForm from "./components/AuditForm";
import AuditControls from "./components/AuditControls";

function App() {
  const [teamSize, setTeamSize] = useState(5);
  const [monthlyBudget, setMonthlyBudget] = useState(200);
  const [useCase, setUseCase] = useState("Development");

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />

      <AuditControls
        teamSize={teamSize}
        setTeamSize={setTeamSize}
        monthlyBudget={monthlyBudget}
        setMonthlyBudget={setMonthlyBudget}
        useCase={useCase}
        setUseCase={setUseCase}
      />

      <AuditForm />
    </main>
  );
}

export default App;