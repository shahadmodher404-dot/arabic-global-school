import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useTranslations } from "next-intl";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatDate(dateString: string | Date, t: ReturnType<typeof useTranslations>) {
    const lang = t("lang");
    const localeMap = {
        ar: "ar-IQ",
        en: "en-US",
        id: "id-ID",
    };

    const locale = localeMap[lang as keyof typeof localeMap] || "en-US";

    return new Date(dateString).toLocaleDateString(locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export function generateGuid(): string {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

export function formateClasses(...classes:string[]){
    return classes.join(" ").trim();
}