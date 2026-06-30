'use client';

import { useEffect, useRef, useState } from "react";
import { storyblokEditable } from "@storyblok/react";

export default function Marquee({ blok }) {
  const panels =
    (blok.MarqueeItems ?? []).filter(
      (item) => item?.Title
    );

  const trackRef = useRef(null);
  const [distance, setDistance] = useState(0);

  const looped = [...panels, ...panels];

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;

      setDistance(
        trackRef.current.scrollWidth / 2
      );
    };

    measure();

    document.fonts?.ready?.then(measure);

    window.addEventListener(
      "resize",
      measure
    );

    return () =>
      window.removeEventListener(
        "resize",
        measure
      );
  }, []);

  return (
    <section
      {...storyblokEditable(blok)}
      className="overflow-hidden border-y border-border bg-foreground py-4 text-background"
    >
      <div
        key={distance}
        ref={trackRef}
        className="flex w-max items-center will-change-transform"
        style={{
          "--marquee-distance": `${distance}px`,
          animation:
            distance > 0
              ? "marquee 40s linear infinite"
              : "none",
        }}
      >
        {looped.map((panel, i) => (
          <span
            key={`${panel._uid}-${i}`}
            className="flex shrink-0 items-center pr-8"
          >
            <span className="font-heading text-xl font-medium md:text-2xl">
              {panel.Title}
            </span>

            <span
              className="pl-8 text-secondary"
              aria-hidden
            >
              ✦
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}