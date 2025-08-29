import { useTranslations } from "next-intl";
import AppImage from "../app-image";
import CustomLink from "../ui/Link";
import Section from "../ui/section";

// TODO: add the missing background stuff

function HomeHero() {
    const t = useTranslations("home.hero");

    return (
        <Section className="bg-[url('/svg/hero-background.svg')] bg-no-repeat bg-cover">
            <p className="bg-solid-light py-[6px] px-6 w-fit rounded-full text-natural-tertiary mx-auto mb-10">{t("paragraph")}</p>

            <div className="px-4">
                <h1 className="section-header">
                    {t("title")}
                </h1>

                <h2 className="section-description">
                    {t("subtitle")}
                </h2>
            </div>

            <div
                className="px-6 py-3 flex items-stretch gap-4 w-fit rounded-full mx-auto translate-y-1/2"
                style={{ background: "linear-gradient(180deg, #FFFEED 0%, #FFFFFF 100%)" }}
            >
                <CustomLink shadow="default" href={"/about"} className="text-natural-primary px-3 py-2 border rounded-full">
                    {t("registration")}
                </CustomLink>

                <CustomLink href={"/contact"} shadow={"none"} variant={"outline"} className="text-natural-primary px-6 py-3 border rounded-full">
                    {t("discover")}
                </CustomLink>
            </div>

            <div className="w-full grid place-items-center mx-auto">
                <AppImage
                    width={1800}
                    height={800}
                    className="w-full sm:rounded-[40px] max-h-[560px] object-cover"
                    optimized
                    src={"/images/hero-image.jpg"}
                    priority
                />
            </div>
        </Section>
    );
}

export default HomeHero;
