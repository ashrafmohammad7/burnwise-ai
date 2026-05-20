function App() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 rounded-full border border-white/20 px-4 py-2 text-sm text-gray-300">
          AI Spend Audit Platform
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Stop Overspending on AI Tools
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          Discover hidden savings across ChatGPT, Claude, Cursor,
          Copilot, Gemini and more in under 2 minutes.
        </p>

        <button className="mt-8 rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105">
          Run Free Audit
        </button>
      </section>
    </main>
  );
}

export default App;