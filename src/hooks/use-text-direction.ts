import { Locale } from "@/i18n/routing";
import { useLocale } from "next-intl";

export default function useTextDirection() {
    const locale = useLocale() as Locale;    
    return { dir: locale == "ar" ? "rtl" : "ltr", locale };
}
