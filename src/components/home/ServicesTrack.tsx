"use client";

import { useEffect, useRef } from "react";

const SPEED = 45; // px per second
const END_PAUSE = 1400; // ms to rest at each end
const RESUME_AFTER = 2500; // ms after the user stops interacting

/**
 * Horizontal services row that slowly scrolls to the end, then back to the start, on a loop.
 * Pauses while hovered, focused, touched or scrolled by the user, and when off-screen.
 */
export default function ServicesTrack({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const track = ref.current;
    if (!track || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let last = 0;
    let direction = 1;
    let pos = track.scrollLeft;
    let restUntil = 0;
    let visible = false;
    let hovering = false;
    let userUntil = 0;
    let autoScrolling = false;

    const setSnap = (on: boolean) => {
      // Scroll-snap would fight sub-pixel programmatic scrolling.
      track.style.scrollSnapType = on ? "" : "none";
    };

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const dt = last ? Math.min(now - last, 64) : 0;
      last = now;
      const max = track.scrollWidth - track.clientWidth;
      const idle = visible && !hovering && now > userUntil && max > 0;
      if (!idle) {
        if (autoScrolling) setSnap(true);
        autoScrolling = false;
        pos = track.scrollLeft;
        return;
      }
      if (!autoScrolling) {
        autoScrolling = true;
        setSnap(false);
        pos = track.scrollLeft;
      }
      if (now < restUntil) return;
      pos += direction * SPEED * (dt / 1000);
      if (pos >= max) {
        pos = max;
        direction = -1;
        restUntil = now + END_PAUSE;
      } else if (pos <= 0) {
        pos = 0;
        direction = 1;
        restUntil = now + END_PAUSE;
      }
      track.scrollLeft = pos;
    };

    const markUser = () => {
      userUntil = performance.now() + RESUME_AFTER;
    };
    const enter = () => {
      hovering = true;
    };
    const leave = () => {
      hovering = false;
      markUser();
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(track);

    track.addEventListener("pointerenter", enter);
    track.addEventListener("pointerleave", leave);
    track.addEventListener("focusin", enter);
    track.addEventListener("focusout", leave);
    track.addEventListener("touchstart", markUser, { passive: true });
    track.addEventListener("wheel", markUser, { passive: true });
    track.addEventListener("keydown", markUser);
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      track.removeEventListener("pointerenter", enter);
      track.removeEventListener("pointerleave", leave);
      track.removeEventListener("focusin", enter);
      track.removeEventListener("focusout", leave);
      track.removeEventListener("touchstart", markUser);
      track.removeEventListener("wheel", markUser);
      track.removeEventListener("keydown", markUser);
      setSnap(true);
    };
  }, []);

  return (
    <ul ref={ref} className="dh-services__track" tabIndex={0} aria-label="Our services, scroll horizontally for more">
      {children}
    </ul>
  );
}
