import React from "react";
import Section from "../ui/section";
import { useTranslations } from "next-intl";
import { LanguageArrowIcon } from "@/assets/icons";
import { Card, CardContent } from "../ui/card";
import { ArabicContainerIcon, EnglishContainerIcon, IndonesianContainerIcon } from "@/assets/langs-container-icons";

function HomeLanguage() {
    const t = useTranslations("home.language");

    return (
        <Section size={"screen"} className="bg-white mt-16">
            <Section.Inner className="relative">
                <div className="" dir="ltr">
                    <div className="absolute scale-75 md:scale-90 lg:scale-100 top-[55%] md:top-1/6 lg:top-32 start-5 md:start-1/6 lg:start-1/4 -translate-x-1/5 md:-translate-x-1/3 lg:-translate-x-1/2 -translate-y-1/2 hidden min-[400px]:flex flex-col">
                        <div
                            className="px-6 py-3 justify-center items-center gap-2 bg-danger-solid text-white rounded-full font-medium"
                            style={{ boxShadow: "0 7px 16px 0 rgba(240, 93, 37, 0.30), 0 2px 7.4px 0 rgba(255, 255, 255, 0.25) inset" }}
                        >
                            Membentuk Pemimpin!
                        </div>
                        <LanguageArrowIcon
                            className="ms-auto -rotate-[120deg] md:-rotate-[40deg] lg:-rotate-[75deg] mt-2 md:translate-x-4 lg:translate-x-8"
                            centerColor="#fff"
                            outerColor="#F37C44"
                        />
                    </div>

                    <div className="absolute scale-75 md:scale-90 lg:scale-100 top-1/3 md:top-[30%] lg:top-[25%] start-[75%] md:start-[90%] lg:start-[75%] -translate-x-1/2 -translate-y-1/2 min-[400px]:flex flex-col hidden">
                        <div
                            className="px-6 py-3 justify-center items-center gap-2 bg-primary-solid text-white rounded-full font-medium"
                            style={{ boxShadow: "0 7px 16px 0 rgba(0, 100, 226, 0.30), 0 2px 7.4px 0 rgba(255, 255, 255, 0.25) inset" }}
                        >
                            عربيه!
                        </div>
                        <LanguageArrowIcon
                            className="me-auto mt-2 rotate-45 md:rotate-30 lg:rotate-0 -translate-x-8 md:-translate-x-6 lg:-translate-x-8"
                            outerColor="#66A2EE"
                            centerColor="#fff"
                        />
                    </div>

                    <div className="absolute scale-75 md:scale-90 lg:scale-100 bottom-0 md:bottom-4 lg:bottom-8 start-[85%] md:start-[82%] lg:start-[80%] -translate-x-1/2 -translate-y-1/2 min-[400px]:flex flex-col hidden">
                        <LanguageArrowIcon
                            className="me-auto mt-2 -translate-x-12 md:-translate-x-10 lg:-translate-x-12 rotate-120"
                            outerColor="#FFDE22"
                            centerColor="#000"
                        />
                        <div
                            className="px-6 py-3 justify-center items-center gap-2 bg-secondary-solid rounded-full font-medium min-w-max"
                            style={{ boxShadow: "0 7px 16px 0 rgba(255, 222, 34, 0.30), 0 -4px 10.9px 0 rgba(255, 255, 255, 0.80) inset" }}
                        >
                            Speak English!
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl w-full mx-auto my-16 md:my-32">
                    <h1 className="mx-auto section-header capitalize text-center mb-4 max-w-lg">{t("title")}</h1>

                    <div className="flex flex-col md:flex-row *:flex-1 gap-4 mt-16">
                        <Card className="max-w-[230px] md:max-w-[285px] bg-background-container border-none relative md:py-8">
                            <CardContent className="px-[20px]">
                                <ArabicContainerIcon className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-0" />

                                <h3 className="font-medium md:text-[20px] leading-normal mb-4">
                                    <span className="rtl:text-natural-tertiary">{t("langs.arabic.title.part1")}</span>{" "}
                                    <span className="ltr:text-natural-tertiary">{t("langs.arabic.title.part2")}</span>
                                </h3>

                                <p className="text-natural-tertiary text-sm md:text-base">{t("langs.arabic.desc")}</p>
                            </CardContent>
                        </Card>
                        <Card className="max-w-[230px] md:max-w-[285px] bg-background-container border-none me-1/2 md:me-0 md:translate-y-1/2 relative md:py-8 ms-auto md:ms-0">
                            <CardContent className="px-[20px]">
                                <IndonesianContainerIcon className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-0" />

                                <h3 className="font-medium md:text-[20px] leading-normal mb-4">
                                    <span className="rtl:text-natural-tertiary">{t("langs.indonesian.title.part1")}</span>{" "}
                                    <span className="ltr:text-natural-tertiary">{t("langs.indonesian.title.part2")}</span>
                                </h3>

                                <p className="text-natural-tertiary text-sm md:text-base">{t("langs.indonesian.desc")}</p>
                            </CardContent>
                        </Card>
                        <Card className="max-w-[230px] md:max-w-[285px] bg-background-container border-none relative md:py-8">
                            <CardContent className="px-[20px]">
                                <EnglishContainerIcon className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-0" />

                                <h3 className="font-medium md:text-[20px] leading-normal mb-4">
                                    <span className="rtl:text-natural-tertiary">{t("langs.english.title.part1")}</span>{" "}
                                    <span className="ltr:text-natural-tertiary">{t("langs.english.title.part2")}</span>
                                </h3>

                                <p className="text-natural-tertiary text-sm md:text-base">{t("langs.english.desc")}</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Section.Inner>
        </Section>
    );
}

export default HomeLanguage;
