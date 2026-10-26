import { useEffect, useState } from "react";

/** Adds `.is-visible` to every `.reveal` element as it enters the viewport. */
export function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    // Reveal anything already at or above the current viewport (deep links, restored scroll).
    const revealVisible = () => {
      elements.forEach((el) => {
        if (el.classList.contains("is-visible")) return;
        const { top } = el.getBoundingClientRect();
        if (top < window.innerHeight * 0.92) el.classList.add("is-visible");
      });
    };
    revealVisible();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    // Safety net for fast jumps and initial deep links: re-check once things settle.
    let timer = 0;
    const scheduleCheck = (delay = 140) => {
      window.clearTimeout(timer);
      timer = window.setTimeout(revealVisible, delay);
    };
    const onScroll = () => scheduleCheck();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", onScroll);
    window.addEventListener("load", () => scheduleCheck(400));
    scheduleCheck(600);

    // Deep links (e.g. /#contato) arrive before React mounts: align them once mounted.
    const initialHash = window.location.hash;
    const hashTimer = initialHash
      ? window.setTimeout(() => {
          const target = document.querySelector<HTMLElement>(initialHash);
          target?.scrollIntoView({ behavior: "auto", block: "start" });
          scheduleCheck(120);
        }, 80)
      : 0;

    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(hashTimer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onScroll);
      observer.disconnect();
    };
  }, []);
}

/** Tracks page scroll for the header's floating state. */
export function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

/** Highlights the nav link of the section currently in view. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-38% 0px -52% 0px", threshold: [0, 0.15, 0.4, 0.75] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
