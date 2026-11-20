"use client";

import { useEffect, useRef } from "react";

/** Background video for the hero. The file is already slowed; playbackRate can slow it further. */
export default function HeroVideo({ playbackRate = 1 }: { playbackRate?: number }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const apply = () => {
      video.playbackRate = playbackRate;
    };
    apply();
    // Some browsers reset the rate when the source (re)loads.
    video.addEventListener("loadeddata", apply);
    video.addEventListener("play", apply);
    return () => {
      video.removeEventListener("loadeddata", apply);
      video.removeEventListener("play", apply);
    };
  }, [playbackRate]);

  return (
    <video
      ref={ref}
      className="dh-hero__media"
      // 2.5× slow-motion render of /bg-video.mp4 with interpolated frames (ffmpeg minterpolate, 30fps)
      src="/bg-video-slow.mp4"
      poster="/images/figma/hero-poster.jpg"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    />
  );
}
