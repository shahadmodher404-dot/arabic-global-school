"use client";

import Link from "next/link";
import AppImage from "./app-image";
import { useTranslations } from "next-intl";
import LangSwitcher from "./lang-switcher";
import { Button } from "./ui/button";
import { useNavbarToggler } from "@/hooks/use-navbar-toggler";
import { BurgerMenu } from "@/assets/icons";
import BergerMenu from "./BergerMenu";

function Navbar() {
    const { toggle, isOpen, close } = useNavbarToggler();
    const t = useTranslations("navbar");

    return (
        <nav className="flex items-stretch justify-between p-4 w-full max-w-8xl mx-auto overflow-hidden">
            <aside className="border-border-primary border p-2 pe-4 hidden lg:flex items-center gap-4 rounded-full ">
                <div className="flex items-center gap-2">
                    <AppImage className="size-10" optimized width={200} height={200} src={"/images/logo-school.png"} />
                    <AppImage className="h-8" src={"/images/global-arabic-school.png"} />
                </div>

                <div className="flex items-center gap-8 px-10">
                    <Link href="/about">{t("navigation.about")}</Link>
                    <Link href="/activities">{t("navigation.activities")}</Link>
                    <button>{t("navigation.curricula")}</button>
                    <Link href="/blog">{t("navigation.news")}</Link>
                </div>
            </aside>

            <aside className="flex items-center gap-2">
                <LangSwitcher />

                <Button className="rounded-full py-3 px-6 h-12">{t("registration")}</Button>
            </aside>

            <aside className="block lg:hidden">
                <button className="border border-border-primary rounded-2xl bg-white grid place-items-center size-12" onClick={toggle}>
                    <BurgerMenu />
                </button>
            </aside>

            {/* Mobile Burger Menu */}
            <BergerMenu isOpen={isOpen} onClose={close} />
        </nav>
    );
}

export default Navbar;
