"use client";

import { useEffect, useState } from "react";
import Lenis, { LenisOptions } from "lenis";

export function useLenisScroll(options: LenisOptions = {}) {
    const [isOnBattery, setIsOnBattery] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        if (window.innerWidth < 1024) return;

        // Check battery status
        const checkBatteryStatus = async () => {
            try {
                // Check if Battery API is supported
                if (!("getBattery" in navigator)) return;

                const battery = await (navigator as any).getBattery();
                setIsOnBattery(!battery.charging);

                // Listen for charging changes
                battery.addEventListener("chargingchange", () => {
                    setIsOnBattery(!battery.charging);
                });
            } catch {
                // Battery API not supported or failed, default to false
                setIsOnBattery(false);
            }
        };

        checkBatteryStatus();
    }, []);

    useEffect(() => {
        if (typeof window === "undefined") return;

        if (window.innerWidth < 1024) return;

        // Disable Lenis when on battery to save power
        if (isOnBattery) {
            return;
        }

        const lenis = new Lenis({
            duration: 1.2, // The duration of the smooth scroll
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            overscroll: true,
            ...options,
        });

        // RAF loop for Lenis
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, [options, isOnBattery]);
}
