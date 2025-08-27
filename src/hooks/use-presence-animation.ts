import { useState, useEffect } from "react";

/**
 * A hook that manages mount/unmount animations for components with a presence transition.
 *
 * This hook handles the timing of mounting, animating, and unmounting components to create
 * smooth enter/exit transitions. It follows this sequence:
 *
 * When showing:
 * 1. Mount the component immediately
 * 2. Start the enter animation after a brief delay (10ms)
 *
 * When hiding:
 * 1. Start the exit animation
 * 2. Unmount the component after the animation completes
 *
 * @param show - Controls whether the component should be visible
 * @param duration - Duration of the exit animation in milliseconds (default: 500)
 * @returns An object containing two state values:
 *   - `isMounted`: Whether the component should be in the DOM
 *   - `isAnimating`: Whether the component should be in its "shown" state
 */
export function usePresenceAnimation(show: boolean, duration: number = 500) {
    const [isMounted, setIsMounted] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (show) {
            // Mount component immediately
            setIsMounted(true);

            // Small delay to ensure DOM has updated after mounting
            const animationTimer = setTimeout(() => {
                setIsAnimating(true);
            }, 10);

            return () => clearTimeout(animationTimer);
        } else {
            // Start exit animation by setting isAnimating to false first
            setIsAnimating(false);

            // Then unmount after animation duration
            const unmountTimer = setTimeout(() => {
                setIsMounted(false);
            }, duration);

            return () => clearTimeout(unmountTimer);
        }
    }, [show, duration]);

    return { isMounted, isAnimating };
}
