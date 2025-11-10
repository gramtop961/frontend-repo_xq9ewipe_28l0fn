import Hero from "./components/Hero";
import Features from "./components/Features";
import Metrics from "./components/Metrics";
import Demo from "./components/Demo";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <Features />
      <Metrics />
      <Demo />
      <section id="paper" className="bg-slate-950">
        <div className="mx-auto max-w-3xl px-6 py-16 text-slate-300">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Paper & artifacts</h2>
          <p className="mt-3">
            The TEDRAM research artifact includes model weights, evaluation protocols, and 500 manually
            transcribed CVR segments. Contact us for access and reproduction details.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-300">
            <li>Transformer ASR backbone extended with multi‑channel acoustic fusion.</li>
            <li>Temporal emotion drift module for stress/workload dynamics.</li>
            <li>Curriculum learning with progressive noise injection.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
