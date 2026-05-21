function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-white">
          Burnwise AI
        </h1>

        <nav className="hidden gap-6 text-sm text-gray-300 md:flex">
          <a href="#features" className="hover:text-white">
            Features
          </a>

          <a href="#pricing" className="hover:text-white">
            Pricing
          </a>

          <a href="#faq" className="hover:text-white">
            FAQ
          </a>
        </nav>

        <button className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:scale-105">
          Run Audit
        </button>
      </div>
    </header>
  );
}

export default Navbar;