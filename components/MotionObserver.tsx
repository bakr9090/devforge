"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const REVEAL_SELECTOR = "main > section:not(.hero-scene), main > article, footer, [data-reveal]";
const STAGGER_DELAY = 70;

function playReveal(item: HTMLElement) {
  const easing = "cubic-bezier(.16, 1, .3, 1)";

  if (item.matches("[data-stagger]")) {
    Array.from(item.children).forEach((child, index) => {
      child.animate(
        [{ opacity: 0, translate: "0 20px" }, { opacity: 1, translate: "0 0" }],
        { duration: 650, delay: Math.min(index, 7) * STAGGER_DELAY, easing, fill: "forwards" },
      );
    });
    return;
  }

  const direction = item.dataset.reveal;
  const start = direction === "left" ? "-26px 0" : direction === "right" ? "26px 0" : "0 26px";
  item.animate(
    [{ opacity: 0, translate: start }, { opacity: 1, translate: "0 0" }],
    { duration: 720, easing, fill: "forwards" },
  );
}

export function MotionObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
    const staggerGroups = Array.from(document.querySelectorAll<HTMLElement>("[data-stagger]"));
    const items = [...new Set([...revealItems, ...staggerGroups])];

    if (!("IntersectionObserver" in window)) {
      items.forEach(playReveal);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          playReveal(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
