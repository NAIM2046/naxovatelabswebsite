"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedTitle() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const letters = titleRef.current?.querySelectorAll(".letter");
    if (!letters) return;

    gsap.fromTo(
      letters,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.07,
        ease: "power3.out",
      }
    );
  }, []);

  const text = "WE ARE NexovateLabs";

  return (
    <h1
      ref={titleRef}
      className="text-4xl md:text-6xl font-extrabold text-center"
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="letter inline-block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}
