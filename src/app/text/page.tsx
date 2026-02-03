"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedTitle() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) {
      console.warn("AnimatedTitle: titleRef is null");
      return;
    }

    // select all letters
    const letters = el.querySelectorAll<HTMLSpanElement>(".letter");
    if (!letters || letters.length === 0) {
      console.warn("AnimatedTitle: no .letter elements found");
      return;
    }

    // reset any inline styles (safe)
    gsap.set(letters, { x: -20, opacity: 0 });

    // animate left -> right
    const tl = gsap.timeline();
    tl.to(letters, {
      x: 0,
      opacity: 1,
      duration: 0.55,
      ease: "power3.out",
      stagger: 0.05, // letter delay
    });

    return () => {
      tl.kill();
    };
  }, []);

  const text = "WE ARE NexovateLabs";

  return (
    <h1
      ref={titleRef}
      className="text-4xl md:text-6xl font-extrabold text-center leading-tight"
      // ensure gradient & clipping work across browsers
      style={{
        // Tailwind bg-clip-text + text-transparent sometimes needs webkit-text-fill override
        background:
          "linear-gradient(90deg, rgb(34,211,238) 0%, rgb(139,92,246) 100%)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        WebkitTextFillColor: "transparent",
      }}
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="letter inline-block"
          // ensure spans are inline-block so they animate correctly and inherit background clip
          style={{
            display: "inline-block",
            // initial hidden state (in case GSAP not ready)
            opacity: 0,
            transform: "translateX(-20px)",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}
