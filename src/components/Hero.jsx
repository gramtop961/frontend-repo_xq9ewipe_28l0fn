import { Rocket, Shield, Mic } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 text-center text-slate-100">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-800/50 px-3 py-1 text-xs text-slate-300 backdrop-blur">
          <Shield className="h-3.5 w-3.5" />
          Safety‑critical ASR for aviation
        </div>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
          TEDRAM: Temporal Emotion Drift & Multi‑Channel ASR for CVR
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Robust transcription in extreme cockpit noise with role attribution, stress detection, and
          safety‑keyword flagging. Built on transformer ASR with multi‑channel fusion and curriculum noise training.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2.5 font-medium text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-600"
          >
            <Mic className="h-5 w-5" /> Live demo
          </a>
          <a
            href="#paper"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-2.5 font-medium text-slate-100 transition hover:bg-slate-700/60"
          >
            <Rocket className="h-5 w-5" /> View paper
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}
