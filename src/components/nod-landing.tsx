"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  ChevronRight,
  Command,
  Globe,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import { ArbiPilotApp } from "@/components/arbipilot-app";
import { CardShell } from "@/components/card-shell";
import { RegistryPanel } from "@/components/registry-panel";

const navItems = [
  { href: "#problem", label: "Problem" },
  { href: "#architecture", label: "Architecture" },
  { href: "#proof", label: "Proof" },
  { href: "#app", label: "Product" },
];

const pillars = [
  {
    title: "Intent stays legible",
    body: "NOD translates natural language into a structured, reviewable action plan instead of hiding everything behind wallet prompts.",
    icon: ShieldCheck,
  },
  {
    title: "Execution stays bounded",
    body: "The model interprets language. Deterministic code controls addresses, validation, quotes, and the exact action path.",
    icon: Workflow,
  },
  {
    title: "Trust scales with agents",
    body: "Start with swaps today. Extend toward richer agentic finance flows later, without abandoning the trust boundary.",
    icon: BadgeCheck,
  },
];

const flow = [
  {
    step: "01",
    title: "Interpret",
    body: "The user states intent in plain language. NOD converts it into validated machine-readable structure.",
  },
  {
    step: "02",
    title: "Explain",
    body: "Before the wallet prompt appears, NOD shows what will happen, why it is supported, and what guardrails apply.",
  },
  {
    step: "03",
    title: "Execute",
    body: "Only deterministic, allowlisted protocol interactions are prepared for signing on Arbitrum.",
  },
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
      setIsScrolled(window.scrollY > 56);
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

  return (
    <div className="min-h-screen text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(34,211,238,0.16),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(78,255,191,0.12),transparent_22%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_24%)]" />
        <div className="absolute left-[10%] top-[12%] h-56 w-56 rounded-full bg-cyan-300/[0.05] blur-3xl" />
        <div className="absolute bottom-[8%] right-[10%] h-64 w-64 rounded-full bg-emerald-300/[0.05] blur-3xl" />
      </div>

      <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", isScrolled ? "px-4 pt-4" : "px-0 pt-0")}>
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between gap-4 border border-white/[0.08] px-4 py-3 backdrop-blur-xl transition-all duration-500 lg:px-6",
            isScrolled
              ? "rounded-2xl bg-[#05070b]/82 shadow-[0_16px_48px_rgba(0,0,0,0.34)]"
              : "rounded-none border-x-0 border-t-0 bg-[#05070a]/60",
          )}
        >
          <a href="#top" className="inline-flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.16)]">
              <Bot size={18} />
            </div>
            <div>
              <div className="text-sm font-semibold tracking-[0.28em] text-white">NOD</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500">Trust layer for agentic execution</div>
            </div>
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-medium transition",
                  activeSection === item.href ? "bg-white text-black" : "text-slate-300 hover:bg-white/[0.06] hover:text-white",
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

      <section id="top" className="relative flex min-h-screen items-center border-b border-white/[0.06] pt-28">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 pb-20 pt-12 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:pb-28">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-200 animate-fade-in-up">
              <Sparkles size={13} />
              Don&apos;t sign blind.
            </div>

            <div className="text-[11px] uppercase tracking-[0.34em] text-slate-500 animate-fade-in-up" style={{ animationDelay: "90ms" }}>
              Inspired by the strongest product patterns in recent agentic submissions
            </div>

            <h1
              className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl animate-fade-in-up"
              style={{ animationDelay: "150ms" }}
            >
              NOD turns AI intent into
              <span className="mt-2 block bg-gradient-to-r from-cyan-200 via-white to-emerald-200 bg-clip-text text-transparent">
                safe, explainable onchain execution.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl animate-fade-in-up" style={{ animationDelay: "240ms" }}>
              As AI agents start touching wallets, the core problem is no longer generation — it&apos;s trust.
              NOD is an Arbitrum-native layer that helps users understand what an AI wants to do with their wallet before they approve anything.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-in-up" style={{ animationDelay: "320ms" }}>
              <a href="#app" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-slate-100">
                Try the product
                <ArrowRight size={16} />
              </a>
              <a href="#architecture" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/30 hover:bg-cyan-500/10">
                See how NOD works
              </a>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "240ms" }}>
            <div className="overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#06080c]/78 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.34)] backdrop-blur-2xl">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.32em] text-slate-500">System thesis</div>
                  <div className="mt-1 text-lg font-semibold text-white">Execution should stay legible</div>
                </div>
                <div className="rounded-full border border-white/[0.08] px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-cyan-200">
                  Arbitrum Sepolia
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/[0.05] bg-white/[0.03] p-4">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Model role</div>
                  <div className="mt-2 text-base font-semibold text-slate-100">Interpret intent only</div>
                </div>
                <div className="rounded-2xl border border-white/[0.05] bg-white/[0.03] p-4">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Execution role</div>
                  <div className="mt-2 text-base font-semibold text-slate-100">Validate + constrain in code</div>
                </div>
                <div className="rounded-2xl border border-white/[0.05] bg-white/[0.03] p-4">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Initial action</div>
                  <div className="mt-2 text-base font-semibold text-slate-100">Safe swap flow</div>
                </div>
                <div className="rounded-2xl border border-white/[0.05] bg-white/[0.03] p-4">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Identity path</div>
                  <div className="mt-2 text-base font-semibold text-slate-100">Registry-ready agent</div>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-white/[0.05] bg-black/20 p-4 text-sm leading-7 text-slate-300">
                NOD is not a magic wallet. It is a trust boundary between natural language and money-moving execution.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <CardShell className="h-full">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">The real-world problem</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              People are already being asked to sign AI-prepared transactions they do not fully understand.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              Wallet prompts expose contracts and calldata, but users are still expected to trust that an agent interpreted them correctly and prepared a safe action path.
            </p>
          </CardShell>

          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-rose-400/15 bg-rose-400/[0.05] p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-200">What breaks today</div>
              <p className="mt-4 text-base leading-8 text-slate-300">
                Most wallet agents collapse reasoning and execution into one black box. Users see a signature request and must trust opaque system behavior they cannot meaningfully inspect.
              </p>
            </div>
            <div className="rounded-[2rem] border border-emerald-400/15 bg-emerald-400/[0.05] p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200">What NOD changes</div>
              <p className="mt-4 text-base leading-8 text-slate-300">
                NOD separates understanding from execution. AI helps interpret intent, but code controls quoting, validation, allowlists, and the exact payload the user reviews before signing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
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

      <section id="architecture" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-10 max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">Architecture</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Explain first. Validate second. Execute last.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            NOD is designed as an execution boundary, not a magic box. The model interprets language while code controls addresses, routes, validation, and what actually reaches the wallet.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <CardShell>
            <div className="grid gap-4">
              {flow.map((item) => (
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

      <section id="proof" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
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
                NOD is built to register through the Arbitrum identity path rather than acting like an invisible script with signing power.
              </p>
              <p>
                That matters for trust. Agents that help users move money should leave a visible identity trail and a verifiable deployment story.
              </p>
              <div className="rounded-2xl border border-white/[0.05] bg-white/[0.025] p-4 text-slate-200">
                <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Readiness</div>
                <div className="mt-2 text-lg font-semibold">Registry, execution path, and product flow all point to the same thesis: trust first.</div>
              </div>
            </div>
          </CardShell>
          <RegistryPanel />
        </div>
      </section>

      <section id="app" className="border-t border-white/[0.06] bg-[#05070a]/72">
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
