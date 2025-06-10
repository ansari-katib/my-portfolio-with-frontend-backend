"use client";
import React from "react";
import { BackgroundBeams } from "../Components/ui/Background";

export function BackgroundBeamsDemo() {
  return (
    <div className="fixed inset-0 -z-10 w-full min-h-screen bg-neutral-950 antialiased">
      <BackgroundBeams />
    </div>

  );
}
