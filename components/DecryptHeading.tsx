"use client";

import { useEffect, useRef } from "react";

const LINES = [
  { text: "Build real skills.", accent: false },
  { text: "Ship real projects.", accent: true },
] as const;
const SCRAMBLE_SET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>[]{}#%&*+=?/";
const FINAL_GLYPHS = LINES.flatMap(({ text }) => [...text].filter((character) => character !== " "));
const INITIAL_GLYPHS = FINAL_GLYPHS.map((_, index) => SCRAMBLE_SET[(index * 17 + 11) % SCRAMBLE_SET.length]);

function scrambledGlyph(frame: number, index: number) {
  const position = (frame * 13 + index * 19 + ((frame + index) % 5) * 7) % SCRAMBLE_SET.length;
  return SCRAMBLE_SET[position];
}

export function DecryptHeading() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const glyphRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    const heading = headingRef.current;
    const glyphs = glyphRefs.current.slice(0, FINAL_GLYPHS.length);
    if (!heading || glyphs.some((glyph) => !glyph)) return;

    glyphs.forEach((glyph, index) => {
      if (glyph) glyph.textContent = INITIAL_GLYPHS[index];
    });
    heading.classList.add("is-decrypting");
    heading.classList.remove("is-finalizing", "is-complete");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      glyphs.forEach((glyph, index) => {
        if (glyph) glyph.textContent = FINAL_GLYPHS[index];
      });
      return;
    }

    const lockStart = 250;
    const lockSpan = 1480;
    const lastLock = lockStart + lockSpan;
    const startTime = performance.now() + 100;
    const finalizingIndexes = new Set([7, FINAL_GLYPHS.length - 6]);
    let animationFrame = 0;
    let scanStarted = false;

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const frame = Math.max(0, Math.floor(elapsed / 38));

      glyphs.forEach((glyph, index) => {
        if (!glyph) return;
        const ratio = index / Math.max(FINAL_GLYPHS.length - 1, 1);
        const lockAt = lockStart + Math.pow(ratio, 0.72) * lockSpan;

        if (elapsed >= lockAt) {
          const isFinalizing = elapsed > lastLock + 35 && elapsed < lastLock + 135;
          const shouldFlicker = isFinalizing && finalizingIndexes.has(index) && (frame + index) % 2 === 0;
          glyph.textContent = shouldFlicker ? scrambledGlyph(frame, index) : FINAL_GLYPHS[index];
          return;
        }

        const aboutToLock = lockAt - elapsed < 105;
        const showFinalFlash = aboutToLock && (frame + index) % 4 === 0;
        glyph.textContent = showFinalFlash ? FINAL_GLYPHS[index] : scrambledGlyph(frame, index);
      });

      if (elapsed >= lastLock && !scanStarted) {
        heading.classList.add("is-finalizing");
        scanStarted = true;
      }

      if (elapsed >= lastLock + 175) {
        glyphs.forEach((glyph, index) => {
          if (glyph) glyph.textContent = FINAL_GLYPHS[index];
        });
        heading.classList.remove("is-decrypting");
        heading.classList.add("is-complete");
        return;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  let glyphIndex = 0;
  return (
    <h1 ref={headingRef} className="decrypt-heading hero-title display text-balance font-semibold is-decrypting">
      <span className="sr-only">Build real skills. Ship real projects.</span>
      <span className="decrypt-visual" aria-hidden="true">
        {LINES.map(({ text, accent }) => (
          <span className={`decrypt-line ${accent ? "text-[var(--mint)]" : ""}`} key={text}>
            {text.split(" ").map((word, wordIndex, words) => (
              <span key={word}>
                <span className="decrypt-word">
                  {[...word].map((character) => {
                    const index = glyphIndex++;
                    return (
                      <span className="decrypt-char" key={`${character}-${index}`}>
                        <span className="decrypt-final">{character}</span>
                        <span className="decrypt-current" ref={(element) => { glyphRefs.current[index] = element; }}>{INITIAL_GLYPHS[index]}</span>
                      </span>
                    );
                  })}
                </span>
                {wordIndex < words.length - 1 ? " " : null}
              </span>
            ))}
          </span>
        ))}
        <span className="decrypt-scan" />
      </span>
    </h1>
  );
}
