import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AuditForm from "./components/AuditForm";

function App() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <AuditForm />
    </main>
  );
}

export default App;