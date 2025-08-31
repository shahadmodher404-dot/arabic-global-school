"use client";

import { EarthIcon } from "@/assets/icons";
import { locales, usePathname, useRouter, type Locale } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Loader } from "lucide-react";

function LangSwitcher() {
    const locale = useLocale() as Locale;
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const handleLocaleChange = (newLocale: string) => {
        startTransition(() => {
            router.replace(pathname, { locale: newLocale as Locale });
            router.refresh();
        });
    };

    const localeNames = ["ar", "en", "id"];

    return (
        <Select value={locale} onValueChange={handleLocaleChange} disabled={isPending}>
            <SelectTrigger className="rounded-full border-border-primary border max-h-[auto] !h-12 py-3 px-3 uppercase">
                {isPending ? <Loader className="animate-spin" /> : <EarthIcon />}
                <SelectValue>{localeNames[locales.indexOf(locale)]}</SelectValue>
            </SelectTrigger>
            <SelectContent>
                {locales.map((loc) => (
                    <SelectItem className="uppercase" key={loc} value={loc}>
                        {localeNames[locales.indexOf(loc)]}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}

export default LangSwitcher;
