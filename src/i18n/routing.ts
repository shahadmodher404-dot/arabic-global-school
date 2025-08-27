import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const locales = ["ar", "en", "id"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
    ar: "العربية",
    en: "English",
    id: "Indonesia",
};

export const routing = defineRouting({
    locales: ["en", "ar", "id"],
    defaultLocale: "en",
    localeDetection: false,
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation({ locales });
