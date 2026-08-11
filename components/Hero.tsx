"use client";

import { ArrowRight, Check, Circle, Code2, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "./Button";
import { DecryptHeading } from "./DecryptHeading";

function WorkspaceVisual() {
  return (
    <div className="hero-workspace relative mx-auto min-w-0 w-full max-w-[590px] overflow-hidden sm:overflow-visible" aria-label="Developer workspace showing code, terminal output, and project progress" role="img">
      <div className="hero-float-a absolute -left-4 top-14 z-20 hidden border border-[var(--line)] bg-[#111817]/95 px-4 py-3 shadow-2xl sm:block">
        <p className="eyebrow text-[var(--muted)]">Build status</p><p className="mt-1 flex items-center gap-2 text-sm font-bold"><Check className="text-[var(--mint)]" size={15} />Deployed</p>
      </div>
      <div className="hero-float-b absolute -right-3 bottom-12 z-20 border border-[var(--line)] bg-[#111817]/95 p-4 shadow-2xl">
        <p className="font-mono text-xs text-[var(--muted)]">PROJECTS SHIPPED</p><p className="mt-2 text-2xl font-bold">08<span className="text-sm text-[var(--mint)]"> / 08</span></p>
      </div>
      <div className="overflow-hidden border border-[#34413e] bg-[#0d1211] shadow-[0_30px_100px_rgba(0,0,0,.5)]">
        <div className="flex h-11 items-center justify-between border-b border-[var(--line)] px-4">
          <div className="flex gap-2"><Circle size={9} fill="#ff8f70" color="#ff8f70" /><Circle size={9} fill="#f6cf63" color="#f6cf63" /><Circle size={9} fill="#7cf7c5" color="#7cf7c5" /></div>
          <span className="font-mono text-[10px] text-[var(--muted)]">devforge / launchpad</span><span className="w-11" />
        </div>
        <div className="grid min-h-[430px] grid-cols-[72px_1fr] sm:grid-cols-[110px_1fr]">
          <div className="border-r border-[var(--line)] p-3 font-mono text-[10px] text-[var(--muted)]">
            <p className="mb-4 text-white/40">EXPLORER</p><p className="mb-2 text-white">v app</p><p className="mb-2 pl-2 text-[var(--mint)]">page.tsx</p><p className="mb-2 pl-2">layout.tsx</p><p className="mb-2">v components</p><p className="pl-2">Project.tsx</p>
          </div>
          <div className="grid grid-rows-[1fr_128px]">
            <div className="overflow-hidden p-5 font-mono text-[11px] leading-6 sm:p-7 sm:text-[12px]">
              <p><span className="text-[#ff8f70]">export default</span> <span className="text-[#7fb5ff]">function</span> <span className="text-[#f6cf63]">Launch</span>() {'{'}</p>
              <p className="pl-4"><span className="text-[#7fb5ff]">const</span> skills = [</p>
              <p className="pl-8 text-[var(--mint)]">&quot;React&quot;, &quot;Node.js&quot;,</p>
              <p className="pl-8 text-[var(--mint)]">&quot;Postgres&quot;, &quot;AI&quot;</p>
              <p className="pl-4">];</p>
              <p className="mt-3 pl-4"><span className="text-[#ff8f70]">return</span> (</p>
              <p className="pl-8 text-white/70">&lt;Project</p>
              <p className="pl-12"><span className="text-[#7fb5ff]">idea</span>=<span className="text-[var(--mint)]">&quot;yours&quot;</span></p>
              <p className="pl-12"><span className="text-[#7fb5ff]">status</span>=<span className="text-[var(--mint)]">&quot;shipped&quot;</span></p>
              <p className="pl-8 text-white/70">/&gt;</p><p className="pl-4">);</p><p>{'}'}</p>
            </div>
            <div className="border-t border-[var(--line)] bg-[#090d0c] p-4 font-mono text-[10px] leading-5 sm:text-[11px]">
              <p className="mb-2 text-white/40">TERMINAL</p><p><span className="text-[var(--mint)]">$</span> launchpad <span className="text-[#7fb5ff]">git:(main)</span> npm run build</p><p className="text-[var(--muted)]">[ok] Ready to deploy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [animationCycle, setAnimationCycle] = useState(0);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = hero.getBoundingClientRect();
    const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
    let wasVisible = visibleHeight / rect.height >= 0.25;

    const observer = new IntersectionObserver(([entry]) => {
      const isVisible = entry.isIntersecting && entry.intersectionRatio >= 0.25;
      if (isVisible && !wasVisible) setAnimationCycle((cycle) => cycle + 1);
      wasVisible = isVisible;
    }, { threshold: [0, 0.25] });

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className="hero-scene grid-bg relative overflow-hidden border-b border-[var(--line)]">
      <div key={animationCycle} className="shell grid min-h-[calc(100svh-77px)] items-center gap-14 py-16 lg:grid-cols-[.95fr_1.05fr] lg:py-20">
        <div className="relative z-10 min-w-0">
          <div className="hero-kicker mb-8 inline-flex items-center gap-2 border border-[var(--line)] bg-[#101514] px-3 py-2 text-xs text-[var(--muted)]"><Code2 size={15} className="text-[var(--mint)]" /><strong className="text-white">Project-first</strong> development learning</div>
          <DecryptHeading />
          <p className="hero-copy mt-8 max-w-xl text-lg leading-8 text-[var(--muted)] sm:text-xl">Learn modern software development through practical, project-based courses designed to take you from beginner to job-ready.</p>
          <div className="hero-actions mt-9 flex flex-col gap-3 sm:flex-row"><Button href="/courses" arrow className="sm:min-w-44">Explore courses</Button><Button href="/#learning-path" variant="secondary" className="sm:min-w-48"><Play size={16} fill="currentColor" />View learning paths</Button></div>
          <div className="hero-meta mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--muted)]"><span className="flex items-center gap-2"><Check size={15} className="text-[var(--mint)]" />Learn at your pace</span><span className="flex items-center gap-2"><Check size={15} className="text-[var(--mint)]" />Lifetime project access</span></div>
        </div>
        <div className="hero-visual"><WorkspaceVisual /></div>
      </div>
      <a href="#value" aria-label="Scroll to learn more" className="focus-ring absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[10px] uppercase text-[var(--muted)] xl:flex">Scroll to build <ArrowRight className="rotate-90" size={13} /></a>
    </section>
  );
}
