import { useTranslations } from "next-intl";
import Link from "next/link";
import AppImage from "../app-image";
import { Card, CardContent } from "../ui/card";
import Section from "../ui/section";

function HomeActivities() {
    const t = useTranslations("home.activities");

    const imgs = [
        "/images/activities/look-to-sky.jpg",
        "/images/activities/reading-quran.png",
        "/images/activities/hands.jpg",
        "/images/activities/children.jpg",
    ];

    return (
        <Section className="relative bg-white px-4 lg:px-8" size="screen">
            <div className="bg-[url('/svg/activities-bg.svg')] bg-center bg-cover bg-no-repeat p-8 md:p-16 ">
                <div className="px-0 lg:px-8 space-y-4">
                    <div className="flex items-center gap-2 py-2 pr-4 pl-2 bg-background-container w-fit rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <circle cx="8" cy="8.49878" r="8" fill="#FFFDC2" />
                            <circle cx="8" cy="8.49878" r="5" fill="#FFDE22" />
                        </svg>
                        <span>{t("age")}</span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <h1 className="text-2xl md:text-4xl lg:text-[48px] font-bold leading-[120%] capitalize text-natural-primary">{t("title")}</h1>

                        <p className="md:max-w-md lg:max-w-lg text-base md:text-lg lg:text-[20px] font-normal leading-[130%] text-natural-secondary text-natural-tertiary">
                            {t("paragraph")}
                        </p>
                    </div>

                    <div className="flex">
                        <Link
                            href={""}
                            className="shadow-button-white flex w-[185px] h-[51px] px-6 py-4 justify-center items-center gap-2 rounded-full bg-white text md:ms-auto border-2 border-border-primary"
                        >
                            {t("registerNow")}
                        </Link>
                    </div>

                    <div className="overflow-auto">
                        <div className="grid grid-cols-4 md:grid-cols-2 gap-4 sm:-me-8 md:me-0 w-[calc(500px*4+(1rem*3))] md:w-auto">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <Card key={index} className="rounded-lg gap-4 bg-transparent border-none py-0 size-full w-full md:w-auto">
                                    <CardContent className="flex items-center gap-4 px-0 size-full">
                                        <div className="rounded-3xl bg-white p-1.5 w-[250px]">
                                            <AppImage
                                                className="rounded-2xl h-[160px] object-cover object-center"
                                                optimized
                                                width={350}
                                                height={300}
                                                src={imgs[index]}
                                                alt=""
                                            />
                                        </div>
                                        <div className="max-w-[300px]">
                                            <h3 className="text-[20px] md:text-[24px] leading-[130%] text-natural-primary">
                                                {t(`cards.${index}.title`)}
                                            </h3>
                                            <p className="text-natural-tertiary">{t(`cards.${index}.desc`)}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default HomeActivities;
