import { useEffect, useRef, useState } from "react";
import { Upload, Play, Pause, Loader2, User, Headphones } from "lucide-react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";

export default function Demo() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const audioRef = useRef(null);

  async function handleTranscribe(e) {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    setResult(null);

    try {
      // If backend not wired yet, simulate a short delay and demo output
      if (!BACKEND_URL) {
        await new Promise((r) => setTimeout(r, 1200));
        setResult({
          text: "Mayday mayday, engine one flameout, initiating immediate descent.",
          roles: [
            { speaker: "Pilot", start: 0.2, end: 2.8 },
            { speaker: "ATC", start: 3.0, end: 5.5 },
          ],
          stress: [{ start: 0.0, end: 3.0, level: "high" }],
          keywords: ["engine failure", "descent"],
        });
        setLoading(false);
        return;
      }

      const form = new FormData();
      form.append("audio", file);
      const res = await fetch(`${BACKEND_URL}/transcribe`, { method: "POST", body: form });
      if (!res.ok) throw new Error("Transcription failed");
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      setResult({ error: "Transcription failed. Please try another clip." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="demo" className="bg-slate-950">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-center text-2xl font-semibold text-white sm:text-3xl">Try a short clip</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-400">
          Upload a few seconds of cockpit or ATC audio. We’ll transcribe, attribute speakers, and highlight stress.
        </p>

        <form onSubmit={handleTranscribe} className="mx-auto mt-8 max-w-2xl rounded-xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="flex items-center gap-4">
            <label className="inline-flex cursor-pointer items-center gap-3 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-slate-200 hover:bg-slate-700">
              <Upload className="h-5 w-5" />
              <input
                type="file"
                accept="audio/*"
                onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                className="hidden"
              />
              {file ? file.name : "Choose audio"}
            </label>
            <button
              type="submit"
              disabled={!file || loading}
              className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2 font-medium text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Play className="h-5 w-5" />}
              {loading ? "Processing" : "Transcribe"}
            </button>
          </div>

          {file && (
            <audio ref={audioRef} controls src={URL.createObjectURL(file)} className="mt-4 w-full" />
          )}
        </form>

        {result && (
          <div className="mx-auto mt-6 max-w-3xl space-y-4">
            {result.error ? (
              <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-red-200">{result.error}</div>
            ) : (
              <>
                <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4 text-slate-200">
                  <div className="text-sm uppercase tracking-wide text-slate-400">Transcript</div>
                  <p className="mt-2 text-lg text-white">{result.text}</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4 text-slate-200">
                    <div className="text-sm uppercase tracking-wide text-slate-400">Speaker roles</div>
                    <ul className="mt-2 space-y-2">
                      {(result.roles || []).map((r, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-white">
                          <User className="h-4 w-4 text-sky-400" />
                          <span className="font-medium">{r.speaker}</span>
                          <span className="text-slate-400">({r.start.toFixed?.(1) ?? r.start}s–{r.end.toFixed?.(1) ?? r.end}s)</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4 text-slate-200">
                    <div className="text-sm uppercase tracking-wide text-slate-400">Stress segments</div>
                    <ul className="mt-2 space-y-2">
                      {(result.stress || []).map((s, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-white">
                          <Headphones className="h-4 w-4 text-amber-400" />
                          <span className="font-medium capitalize">{s.level}</span>
                          <span className="text-slate-400">({s.start}s–{s.end}s)</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {(result.keywords || []).length > 0 && (
                  <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4 text-slate-200">
                    <div className="text-sm uppercase tracking-wide text-slate-400">Detected keywords</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {result.keywords.map((k, i) => (
                        <span key={i} className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
                          {k}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
