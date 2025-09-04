"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type ComingSoonProps = {
  title?: string;
  subtitle?: string;
  launchDate?: string | Date; // optional: if provided, shows countdown
  className?: string;
  centered?: boolean; // center within parent instead of full block
};

function useCountdown(target?: Date | string) {
  const date = useMemo(() => (target ? new Date(target) : undefined), [target]);
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    if (!date) return;
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, [date]);

  if (!date) return undefined;

  const total = Math.max(0, Math.floor((date.getTime() - now.getTime()) / 1000));
  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;

  return { total, days, hours, minutes, seconds };
}

export default function ComingSoon({
  title = "Coming Soon",
  subtitle = "We’re crafting something great. Stay tuned!",
  launchDate,
  className,
  centered = false,
}: ComingSoonProps) {
  const countdown = useCountdown(launchDate);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[#F2F6FC] border border-border/60 h-screen",
        centered ? "grid place-items-center" : "",
        className
      )}
    >
      {/* animated soft blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
        initial={{ x: 0, y: 0, scale: 1 }}
        animate={{ x: [0, 20, -10, 0], y: [0, 30, 10, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -right-16 h-80 w-80 rounded-full bg-secondary-solid/30 blur-3xl"
        initial={{ x: 0, y: 0, scale: 1 }}
        animate={{ x: [0, -25, 15, 0], y: [0, -20, 5, 0], scale: [1, 0.94, 1.06, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* subtle grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] [mask-image:radial-gradient(80%_60%_at_50%_40%,#000_60%,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)",
          backgroundSize: "24px 24px, 24px 24px",
          backgroundPosition: "-12px -12px, -12px -12px",
        }}
      />

      {/* content */}
      <div className={cn("relative z-10 mx-auto w-full px-6 py-16 sm:py-20 lg:py-24", centered ? "text-center" : "")}>
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-b from-[#2F4674] to-[#020409] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="mt-3 text-base sm:text-lg text-content-natural-secondary max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
        >
          {subtitle}
        </motion.p>

        {/* countdown (optional) */}
        {countdown && (
          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {([
              { label: "Days", value: countdown.days },
              { label: "Hours", value: countdown.hours },
              { label: "Minutes", value: countdown.minutes },
              { label: "Seconds", value: countdown.seconds },
            ] as const).map((part) => (
              <div
                key={part.label}
                className="rounded-2xl border border-border/70 bg-white/70 backdrop-blur px-4 py-3 sm:px-5 sm:py-4 text-center min-w-[84px] shadow-sm"
              >
                <div className="text-2xl sm:text-3xl font-semibold text-[#2F4674] tabular-nums">
                  {String(part.value).padStart(2, "0")}
                </div>
                <div className="text-[11px] sm:text-xs text-content-natural-secondary">{part.label}</div>
              </div>
            ))}
          </motion.div>
        )}

        {/* small shimmer line */}
        <motion.div
          aria-hidden
          className="mx-auto mt-10 h-px w-32 bg-gradient-to-r from-transparent via-[#2F4674]/40 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />
      </div>
    </div>
  );
}
