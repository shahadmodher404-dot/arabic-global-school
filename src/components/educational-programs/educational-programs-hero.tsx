import { useTranslations } from "next-intl";
import Image from "next/image";
import CustomLink from "../ui/Link";
import Section from "../ui/section";
import { EducationalProgramsCircleIcon } from "@/assets/icons";

export default function EducationalProgramsHero() {
    const t = useTranslations("educational_programs.hero");

    return (
        <Section className="flex lg:flex-row *:flex-1 pb-0">
            <div className="flex flex-col">
                <div className="bg-background-container rounded-full px-4 py-2 flex items-center gap-2 w-fit mb-4 mx-auto lg:mx-0">
                    <EducationalProgramsCircleIcon />
                    <span>{t("enrichment")}</span>
                </div>

                <div className="mx-auto lg:mx-0 text-center lg:text-start my-8">
                    <h1 className="text-[32px] md:text-[40px] lg:text-[56px] font-bold leading-[100%]">
                        {t("title.part1")} <br /> {t("title.part2")}
                    </h1>
                    <p className="mt-4 pe-0 lg:pe-16 text-content-natural-primary/50">{t("subtitle")}</p>
                </div>

                <div className="mt-auto flex items-center justify-center lg:justify-start gap-4 py-4">
                    <CustomLink href="" shadow={"default"}>
                        {t("registration")}
                    </CustomLink>

                    <div className="flex flex-col">
                        <h4 className="font-bold">{t("counter")}</h4>
                        <span className="text-content-natural-primary/50">{t("counter_label")}</span>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex gap-6">
                <div className="flex flex-col flex-1 gap-6">
                    <Image
                        src={"/images/educational-programs/image-1.png"}
                        className="w-full rounded-4xl object-cover object-center"
                        width={200}
                        height={224}
                        alt={""}
                    />
                    <Image
                        src={"/images/educational-programs/image-1.png"}
                        className="w-full rounded-4xl object-cover object-center min-h-[270px]"
                        width={200}
                        height={270}
                        alt={""}
                    />
                </div>
                <div className="flex flex-col flex-1 gap-6">
                    <Image
                        src={"/images/educational-programs/image-1.png"}
                        className="w-full min-h-[270px] rounded-4xl object-cover object-center"
                        width={200}
                        height={270}
                        alt={""}
                    />
                    <Image
                        src={"/images/educational-programs/image-1.png"}
                        className="w-full rounded-4xl object-cover object-center"
                        width={200}
                        height={224}
                        alt={""}
                    />
                </div>
                <div className="flex flex-col flex-1 gap-6">
                    <Image
                        src={"/images/educational-programs/image-1.png"}
                        className="w-full rounded-4xl object-cover object-center"
                        width={200}
                        height={224}
                        alt={""}
                    />
                    <Image
                        src={"/images/educational-programs/image-1.png"}
                        className="w-full rounded-4xl object-cover object-center min-h-[270px]"
                        width={200}
                        height={270}
                        alt={""}
                    />
                </div>
            </div>

            <div className="flex flex-col md:hidden gap-6">
                <Image
                    src={"/images/educational-programs/mobile-image-1.png"}
                    className="w-full rounded-4xl object-cover object-center max-h-[120px]"
                    width={400}
                    height={120}
                    alt={""}
                />
                <Image
                    src={"/images/educational-programs/students.png"}
                    className="w-full rounded-4xl object-cover object-center max-h-[120px]"
                    width={400}
                    height={120}
                    alt={""}
                />
                <Image
                    src={"/images/educational-programs/mobile-image-2.png"}
                    className="w-full rounded-4xl object-cover object-center max-h-[120px]"
                    width={400}
                    height={120}
                    alt={""}
                />
            </div>
        </Section>
    );
}
