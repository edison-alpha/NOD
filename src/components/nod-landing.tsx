"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  Bot,
  ChevronRight,
  Command,
  Globe,
  Orbit,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import { ArbiPilotApp } from "@/components/arbipilot-app";
import { CardShell } from "@/components/card-shell";
import { RegistryPanel } from "@/components/registry-panel";

const pillars = [
  {
    title: "Trust before execution",
    body: "NOD helps users understand AI-assisted wallet actions before signature time — no more blind prompts, vague calldata, or black-box agent behavior.",
    icon: ShieldCheck,
  },
  {
    title: "Deterministic by design",
    body: "The model interprets intent, but execution stays bounded in allowlisted code. Safer flows, tighter guarantees, and a clearer review surface.",
    icon: Workflow,
  },
  {
    title: "Built for real agentic finance",
    body: "Start with swaps today. Extend toward bridging, approvals, and multi-step wallet actions tomorrow with the same trust boundary.",
    icon: Blocks,
  },
];

const timeline = [
  {
    step: "01",
    title: "Intent becomes structured",
    body: "A user says what they want in plain language. NOD translates that into validated intent instead of freestyle transaction generation.",
  },
  {
    step: "02",
    title: "Risk becomes visible",
    body: "Before any signing request appears, NOD previews execution, estimated output, safeguards, and why the action is supported.",
  },
  {
    step: "03",
    title: "Execution becomes bounded",
    body: "Only deterministic, allowlisted protocol calls are prepared. The wallet signs an understandable action path — not a mystery box.",
  },
];

const benchmarkPatterns = [
  {
    label: "From AgentHands",
    text: "A landing page should feel like a product launch, not a repo landing. Strong stagecraft makes the system feel bigger and more credible.",
  },
  {
    label: "From SocialClaw",
    text: "A sharper problem statement and an intentional why-chain narrative make an infrastructure product feel real and urgent.",
  },
  {
    label: "From Toppa",
    text: "Proof of reality matters. Real utility, visible identity, and a product surface that feels usable today beat abstract future promises.",
  },
];

const stats = [
  { label: "Execution model", value: "Explain → Validate → Execute" },
  { label: "Network", value: "Arbitrum Sepolia" },
  { label: "Initial action", value: "Safe swap flow" },
  { label: "Identity path", value: "Agent0 / registry-ready" },
];

const navItems = [
  { href: "#problem", label: "Problem" },
  { href: "#architecture", label: "Architecture" },
  { href: "#proof", label: "Proof" },
  { href: "#app", label: "Product" },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function NodLanding() {
  const [activeSection, setActiveSection] = useState("#problem");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const ids = ["problem", "architecture", "proof", "app"];

    const onScroll = () => {
      setIsScrolled(window.scrollY > 48);

      let current = "#problem";
      for (const id of ids) {
        const element = document.getElementById(id);
        if (!element) continue;
        const rect = element.getBoundingClientRect();
        if (rect.top <= 160) current = `#${id}`;
      }
      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const floatingPills = useMemo(
    () => [
      "AI intent parsing",
      "Deterministic validation",
      "Explainable execution",
      "Registry-ready agents",
    ],
    [],
  );

  return (
    <div className="min-h-screen text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.18),transparent_24%),radial-gradient(circle_at_78%_18%,rgba(89,255,193,0.16),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.05),transparent_30%)]" />
        <div className="absolute left-[8%] top-[16%] h-52 w-52 rounded-full border border-white/10 bg-white/[0.02] blur-3xl" />
        <div className="absolute bottom-[10%] right-[8%] h-72 w-72 rounded-full border border-cyan-300/10 bg-cyan-300/[0.04] blur-3xl" />
      </div>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[60] transition-all duration-500",
          isScrolled ? "px-4 pt-4" : "px-0 pt-0",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between gap-4 border border-white/[0.08] px-4 py-3 backdrop-blur-xl transition-all duration-500 lg:px-6",
            isScrolled
              ? "rounded-2xl bg-[#06080c]/82 shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
              : "rounded-none border-x-0 border-t-0 bg-[#05070a]/58",
          )}
        >
          <a href="#top" className="inline-flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.18)]">
              <Bot size={18} />
            </div>
            <div>
              <div className="text-sm font-semibold tracking-[0.28em] text-white">NOD</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500">
                Trust layer for agentic execution
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-medium transition",
                  activeSection === item.href
                    ? "bg-white text-black"
                    : "text-slate-300 hover:bg-white/[0.06] hover:text-white",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#app"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-xs font-medium text-slate-200 transition hover:border-cyan-300/30 hover:bg-cyan-400/10 hover:text-white"
          >
            Open product
            <ChevronRight size={14} />
          </a>
        </div>
      </header>

      <section id="top" className="relative flex min-h-screen items-center overflow-hidden border-b border-white/[0.06] pt-28">
        <div className="mx-auto grid w-full max-w-7xl items-end gap-14 px-6 pb-20 pt-12 lg:grid-cols-[1.18fr_0.82fr] lg:px-10 lg:pb-28">
          <div className="relative z-10 max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-200 backdrop-blur-md animate-fade-in-up">
              <Sparkles size={13} />
              Don&apos;t sign blind.
            </div>

            <div className="mb-6 text-[11px] uppercase tracking-[0.36em] text-slate-500 animate-fade-in-up" style={{ animationDelay: "80ms" }}>
              Inspired by winning hackathon product patterns
            </div>

            <h1
              className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl animate-fade-in-up"
              style={{ animationDelay: "140ms" }}
            >
              NOD turns AI intent into
              <span className="mt-2 block bg-gradient-to-r from-cyan-200 via-white to-emerald-200 bg-clip-text text-transparent">
                safe, explainable onchain execution.
              </span>
            </h1>

            <p
              className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl animate-fade-in-up"
              style={{ animationDelay: "220ms" }}
            >
              As AI agents start touching wallets, the real problem is no longer generation — it&apos;s trust.
              NOD is an Arbitrum-native layer that helps users understand what an AI wants to do with their
              wallet before they approve anything.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <a
                href="#app"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-slate-100"
              >
                Try the product
                <ArrowRight size={16} />
              </a>
              <a
                href="#architecture"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/30 hover:bg-cyan-500/10"
              >
                See how NOD works
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: "380ms" }}>
              {floatingPills.map((pill) => (
                <div
                  key={pill}
                  className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs font-medium text-slate-300 backdrop-blur-md"
                >
                  {pill}
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 animate-fade-in-up" style={{ animationDelay: "220ms" }}>
            <div className="absolute -left-8 top-12 h-24 w-24 rounded-full border border-cyan-300/10 bg-cyan-300/[0.05] blur-2xl" />
            <div className="absolute -right-8 bottom-16 h-24 w-24 rounded-full border border-emerald-300/10 bg-emerald-300/[0.05] blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#06080c]/75 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500">Signal board</div>
                  <div className="mt-1 text-lg font-semibold text-white">Why NOD matters now</div>
                </div>
                <div className="rounded-full border border-white/[0.08] px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-cyan-200">
                  Arbitrum-native
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/[0.05] bg-white/[0.03] p-4">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">{item.label}</div>
                    <div className="mt-2 text-base font-semibold text-slate-100">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-white/[0.05] bg-black/20 p-4 text-sm leading-7 text-slate-300">
                NOD is not trying to replace the user&apos;s judgment. It gives users and agents a reviewable path
                between natural language intent and actual wallet execution.
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-4 left-1/2 hidden -translate-x-1/2 text-[11px] uppercase tracking-[0.32em] text-slate-500 md:block">
          [ Scroll to inspect the system ]
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10" id="problem">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <CardShell className="h-full">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">The real-world problem</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              People are already being asked to sign AI-prepared transactions they don&apos;t fully understand.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              That is the gap. Wallet prompts show contracts and calldata, but users are expected to trust that an
              agent understood them correctly and produced a safe action path.
            </p>
          </CardShell>

          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-rose-400/15 bg-rose-400/[0.05] p-6 backdrop-blur-md">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-200">What breaks today</div>
              <p className="mt-4 text-base leading-8 text-slate-300">
                Most wallet agents collapse reasoning and execution into the same black box. Users see a wallet
                prompt and are expected to trust opaque system behavior they cannot meaningfully audit.
              </p>
            </div>
            <div className="rounded-[2rem] border border-emerald-400/15 bg-emerald-400/[0.05] p-6 backdrop-blur-md">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200">What NOD changes</div>
              <p className="mt-4 text-base leading-8 text-slate-300">
                NOD separates understanding from execution. AI helps interpret intent, but code controls quoting,
                validation, allowlists, and the exact payload the user sees before signing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10" id="pillars">
        <div className="mb-10 flex items-center justify-between gap-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">Design pillars</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              A landing page from winning patterns needs more than looks — it needs thesis density.
            </h2>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <CardShell key={pillar.title} className="h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-200">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{pillar.body}</p>
              </CardShell>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10" id="architecture">
        <div className="mb-10 max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">Architecture</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Explain first. Validate second. Execute last.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            NOD is designed as an execution boundary, not a magic box. The model interprets language while code
            controls addresses, routes, validation, and what actually reaches the wallet.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <CardShell>
            <div className="grid gap-4">
              {timeline.map((item) => (
                <div key={item.step} className="rounded-[1.6rem] border border-white/[0.05] bg-white/[0.025] p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">Step {item.step}</div>
                  <div className="mt-2 text-xl font-semibold text-white">{item.title}</div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.body}</p>
                </div>
              ))}
            </div>
          </CardShell>

          <CardShell>
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/[0.05] bg-white/[0.025] p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">AI layer</div>
                <div className="mt-2 text-lg font-semibold text-white">Interpret the user&apos;s intent</div>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Natural language becomes structured intent. No model-defined contract addresses. No freestyle calldata.
                </p>
              </div>
              <div className="rounded-2xl border border-white/[0.05] bg-white/[0.025] p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Control layer</div>
                <div className="mt-2 text-lg font-semibold text-white">Validate, explain, and constrain</div>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Zod schemas, allowlists, quotes, slippage checks, and deterministic protocol adapters create a reviewable plan.
                </p>
              </div>
              <div className="rounded-2xl border border-white/[0.05] bg-white/[0.025] p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Wallet layer</div>
                <div className="mt-2 text-lg font-semibold text-white">User signs only bounded execution</div>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  NOD prepares the exact action path the wallet sees. Users approve with context, not blind trust.
                </p>
              </div>
            </div>
          </CardShell>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
        <div className="grid gap-4 lg:grid-cols-3">
          {benchmarkPatterns.map((item, index) => (
            <div
              key={item.label}
              className={cn(
                "rounded-[1.8rem] border border-white/[0.06] bg-white/[0.03] p-5 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1",
                index === 1 && "lg:-translate-y-5",
              )}
            >
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                <Orbit size={14} />
                {item.label}
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-10 max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">Why Arbitrum</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Agentic finance needs cheap iteration, credible ecosystem rails, and a place to experiment safely.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <CardShell>
            <Globe className="text-cyan-200" size={22} />
            <h3 className="mt-5 text-xl font-semibold text-white">Ecosystem-native execution</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              NOD starts from real Arbitrum rails: Camelot-backed swap execution, registry readiness, and a UX tuned for real wallet flows.
            </p>
          </CardShell>
          <CardShell>
            <BadgeCheck className="text-cyan-200" size={22} />
            <h3 className="mt-5 text-xl font-semibold text-white">Identity-ready agents</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              The registry path matters. Agents that help users move money should be discoverable, attributable, and auditable.
            </p>
          </CardShell>
          <CardShell>
            <Workflow className="text-cyan-200" size={22} />
            <h3 className="mt-5 text-xl font-semibold text-white">Composable future scope</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Swap is the first supported action. The architecture is intentionally shaped for future bridge, approval, and multi-step flows.
            </p>
          </CardShell>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10" id="proof">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <CardShell>
            <div className="space-y-4 text-sm leading-7 text-slate-300">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                <Command size={14} />
                Proof layer
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-white">
                A serious agent should be inspectable, attributable, and ready to live onchain.
              </h2>
              <p>
                NOD is built to register through the Arbitrum identity path rather than pretending to be a ghost in the machine.
              </p>
              <p>
                That matters for trust. Agents that help users move money should leave a visible identity trail and a verifiable deployment story.
              </p>
              <div className="rounded-2xl border border-white/[0.05] bg-white/[0.025] p-4 text-slate-200">
                <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Readiness</div>
                <div className="mt-2 text-lg font-semibold">Registry, execution path, and UI all point to the same thesis: trust first.</div>
              </div>
            </div>
          </CardShell>
          <RegistryPanel />
        </div>
      </section>

      <section className="border-t border-white/[0.06] bg-[#05070a]/70" id="app">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mb-10 max-w-4xl">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">Live product surface</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              The landing page sells the thesis. The product proves it.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Below is the current interactive NOD execution surface running the explain-then-execute flow on Arbitrum Sepolia.
            </p>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-white/[0.08] bg-black/30 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
            <ArbiPilotApp embedded />
          </div>
        </div>
      </section>
    </div>
  );
}
