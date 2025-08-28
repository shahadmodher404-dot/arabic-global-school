"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, TwitterIcon, YouTubeIcon } from "@/assets/icons";
import { Button } from "./ui/button";

interface BurgerMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

function BergerMenu({ isOpen, onClose }: BurgerMenuProps) {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const t = useTranslations("navbar");
    const tHome = useTranslations("home");

    const menuItems = [
        { title: t("navigation.about"), href: "/about" },
        { title: t("navigation.activities"), href: "/activities" },
        {
            title: t("navigation.curricula"),
            href: "/curricula",
            hasDropdown: true,
            dropdownItems: [tHome("curricula.quran"), tHome("curricula.montessori"), tHome("curricula.cambridge"), tHome("curricula.ico")],
        },
        { title: t("navigation.news"), href: "/news" },
        { title: t("navigation.contact"), href: "/contact" },
    ];

    const toggleDropdown = (title: string) => {
        setOpenDropdown(openDropdown === title ? null : title);
    };

    const SOCIAL_LINKS = [
        { href: "#", icon: <TwitterIcon />, hoverColor: "bg-blue-600" },
        { href: "#", icon: <InstagramIcon />, hoverColor: "bg-blue-600" },
        { href: "#", icon: <FacebookIcon />, hoverColor: "bg-blue-600" },
        { href: "#", icon: <YouTubeIcon />, hoverColor: "bg-red-600" },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ x: "100%", opacity: 0, scale: 0.98 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    exit={{ x: "100%", opacity: 0, scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 32, duration: 0.35 }}
                    className="fixed top-0 right-0 h-full w-full bg-white z-50 shadow-xl"
                >
                    {/* Header with Close Button */}
                    <div className="flex justify-end p-6">
                        <button
                            onClick={onClose}
                            className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors text-center"
                            aria-label="Close menu"
                        >
                            {/* Close Icon - Replace with your icon component */}
                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Items */}
                    <nav className="px-6 pb-6">
                        <ul className="space-y-8">
                            {menuItems.map((item, index) => (
                                <li key={item.title}>
                                    <div className="flex items-center justify-between">
                                        <Link
                                            href={item.href}
                                            className="text-xl font-medium text-gray-900 hover:text-blue-600 transition-colors"
                                            onClick={onClose}
                                        >
                                            {item.title}
                                        </Link>
                                        {item.hasDropdown && (
                                            <button
                                                onClick={() => toggleDropdown(item.title)}
                                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                            >
                                                {/* Dropdown Arrow Icon - Replace with your icon component */}
                                                <svg
                                                    className={`w-5 h-5 text-gray-600 transition-transform ${
                                                        openDropdown === item.title ? "rotate-180" : ""
                                                    }`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                        )}
                                    </div>

                                    {/* Dropdown Menu */}
                                    {item.hasDropdown && (
                                        <AnimatePresence>
                                            {openDropdown === item.title && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0, y: -10 }}
                                                    animate={{ height: "auto", opacity: 1, y: 0 }}
                                                    exit={{ height: 0, opacity: 0, y: -10 }}
                                                    transition={{ duration: 0.25, type: "spring", stiffness: 300, damping: 30 }}
                                                    className="overflow-hidden"
                                                >
                                                    {item.dropdownItems?.map((subItem) => (
                                                        <Link
                                                            href={`${item.href}/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                                                            className="text-lg text-gray-600 hover:text-blue-600 transition-colors block"
                                                            onClick={onClose}
                                                        >
                                                            {subItem}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* Registration Button */}
                        <div className="mt-12">
                            <Button
                                className="w-full font-semibold py-4 px-6 rounded-full transition-colors border-2 border-border-primary"
                                shadow="default"
                            >
                                {t("registration")}
                            </Button>
                        </div>

                        <div className="mt-auto flex items-center justify-center gap-4">
                            {SOCIAL_LINKS.map((link, idx) => (
                                <Link
                                    key={idx}
                                    href={link.href}
                                    className="rounded-[20px] p-2 transition-colors bg-[#F2F6FC] w-12 h-12 flex items-center justify-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default BergerMenu;
