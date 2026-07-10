"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/** True on touch / narrow viewports — skip heavy motion for faster mobile loads. */
export function useLiteMotion() {
  const reduceMotion = useReducedMotion();
  const [lite, setLite] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px), (pointer: coarse)");
    const sync = () => setLite(mq.matches || !!reduceMotion);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [reduceMotion]);

  return lite || !!reduceMotion;
}
