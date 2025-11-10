import { AudioWaveform, Users, Cpu, AlarmClock } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: AudioWaveform,
      title: "Multi‑channel fusion",
      desc: "Separately processes pilot, co‑pilot, and ambient mics with adaptive gating for feature‑level fusion.",
    },
    {
      icon: Users,
      title: "Role attribution",
      desc: "Identifies speaker roles and overlaps to disambiguate ATC vs cockpit speech in mixed channels.",
    },
    {
      icon: Cpu,
      title: "Emotion drift modeling",
      desc: "Tracks prosody and affect over time to detect stress and workload changes across utterances.",
    },
    {
      icon: AlarmClock,
      title: "Safety keyword alerts",
      desc: "Flags critical phrases like engine failure, fire, descent with ultra‑low false positives.",
    },
  ];

  return (
    <section id="features" className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-2xl font-semibold text-white sm:text-3xl">Built for the cockpit</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-400">
          Designed for harsh acoustics, overlapping speech, and aviation phraseology.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 text-slate-200">
              <Icon className="h-6 w-6 text-sky-400" />
              <h3 className="mt-3 text-lg font-medium text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
