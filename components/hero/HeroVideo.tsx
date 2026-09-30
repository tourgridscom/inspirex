"use client";

import { useEffect, useRef } from "react";

/**
 * The company's own hero footage, recovered from the archived site, played in
 * full and looped. Playback is muted and inline, and is left paused under
 * prefers-reduced-motion, where the poster frame stands in.
 */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    // The clip is ~5MB, so it stays paused on the poster frame when the
    // visitor has asked for reduced motion or is on a metered/slow connection.
    const connection = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;
    const frugal =
      connection?.saveData === true ||
      ["slow-2g", "2g", "3g"].includes(connection?.effectiveType ?? "");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || frugal) {
      video.pause();
      return;
    }

    const play = () => {
      void video.play().catch(() => {
        /* autoplay refused; the poster frame carries the section */
      });
    };

    video.addEventListener("loadedmetadata", play);
    if (video.readyState >= 1) play();

    return () => video.removeEventListener("loadedmetadata", play);
  }, []);

  return (
    <video
      ref={ref}
      className="h-full w-full object-cover [filter:saturate(.72)_contrast(1.02)_brightness(.94)]"
      poster="/images/hero-poster.jpg"
      muted
      playsInline
      loop
      preload="metadata"
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src="/video/inspirex-hero.mp4" type="video/mp4" />
    </video>
  );
}
