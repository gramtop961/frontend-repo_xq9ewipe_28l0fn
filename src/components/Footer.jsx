export default function Footer() {
  return (
    <footer className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-10 text-slate-400">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm">TEDRAM — Advancing aviation ASR & safety research</p>
          <nav className="flex gap-5 text-sm">
            <a href="#features" className="hover:text-slate-200">Features</a>
            <a href="#demo" className="hover:text-slate-2 00">Demo</a>
            <a href="#paper" className="hover:text-slate-200">Paper</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
