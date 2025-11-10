export default function Metrics() {
  const stats = [
    { label: "WER (clean ATC)", value: "8.23%" },
    { label: "WER (noisy cockpit)", value: "16.47%" },
    { label: "Speaker role accuracy", value: "94.2%" },
    { label: "Stress detection F1", value: "91.8%" },
  ];
  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-2xl font-semibold text-white sm:text-3xl">Measured performance</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-400">
          Benchmarked on ATC-ASR and internal CVR archives. Real‑time factor: 0.42× on a single A100.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 text-center">
              <div className="text-3xl font-semibold text-white">{s.value}</div>
              <div className="mt-2 text-sm text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
