import { useState, useCallback, createContext, useContext, ReactNode } from "react";

/**
 * Context and hook for controlling the mobile navbar toggler (open/close state).
 */
interface NavbarTogglerContextProps {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
}

const NavbarTogglerContext = createContext<NavbarTogglerContextProps | undefined>(undefined);

export const NavbarTogglerProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    const toggle = useCallback(() => setIsOpen((v) => !v), []);

    return <NavbarTogglerContext.Provider value={{ isOpen, open, close, toggle }}>{children}</NavbarTogglerContext.Provider>;
};

export function useNavbarToggler() {
    const ctx = useContext(NavbarTogglerContext);
    if (!ctx) throw new Error("useNavbarToggler must be used within a NavbarTogglerProvider");

    return ctx;
}
