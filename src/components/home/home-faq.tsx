"use client";

import { useTranslations } from "next-intl";
import Section from "../ui/section";
import { ArrowRightIcon, QuestionMarkIcon } from "@/assets/icons";
import { useState } from "react";
import { formateClasses } from "@/lib/utils";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { APIKeys } from "@/services/api-keys";
import { ApiService } from "@/services/api.service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { Locale } from "@/i18n/routing";
import { Loader2 } from "lucide-react";

export default function HomeFAQ() {
    const { locale } = useParams();
    const t = useTranslations("home.faq");
    const [currentFAQ, setCurrentFaq] = useState(0);
    const [imageLoading, setImageLoading] = useState(true);

    const { data = { items: [] } } = useQuery({
        queryKey: [APIKeys.FAQ_API_KEY, locale],
        queryFn: () => ApiService.getFAQs(locale as Locale),
    });

    return (
        <Section size="screen" className="bg-white">
            <Section.Inner>
                <h1 className="section-header max-w-lg">{t("title")}</h1>

                <div className="flex lg:items-center lg:flex-row flex-col gap-8 mt-16">
                    <div className="flex-1 space-y-4">
                        {data.items.map((faq, index) => (
                            <button
                                className={formateClasses(
                                    "px-6 py-4 border rounded-full flex items-center gap-4 w-full text-left lg:max-w-[545px] transition-all duration-300 cursor-pointer",
                                    currentFAQ === index ? "bg-[#F2F6FC] border-transparent" : "bg-transparent border-[#D5DEF1]"
                                )}
                                key={index + faq.question}
                                onClick={() => {
                                    setCurrentFaq(index);
                                    setImageLoading(true); // Reset loading state when FAQ changes
                                }}
                            >
                                <span
                                    className={formateClasses(
                                        "size-[40px] rounded-full grid place-items-center transition-all duration-300",
                                        currentFAQ === index ? "bg-[#020409]" : "bg-[#2F4674]"
                                    )}
                                    style={{ boxShadow: "0px 2px 8px 0px #FFFFFF4D inset" }}
                                >
                                    <QuestionMarkIcon />
                                </span>

                                <p className="font-medium">{faq.question}</p>

                                <div className="ms-auto">
                                    <ArrowRightIcon className="rtl:-scale-x-100" />
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="lg:max-w-[545px] relative overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentFAQ}
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                transition={{
                                    duration: 0.4,
                                    ease: [0.4, 0, 0.2, 1],
                                }}
                                className="space-y-6"
                            >
                                <motion.div
                                    layout
                                    className="overflow-hidden rounded-3xl relative w-full"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.1, duration: 0.3 }}
                                >
                                    {/* Loading Skeleton */}
                                    {imageLoading && (
                                        <div className="absolute size-full inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse w-full lg:w-[545px]">
                                            <div className="w-full h-[300px] bg-gray-300 rounded-3xl">
                                                <div className="flex items-center justify-center h-full">
                                                    <Loader2 className="text-white animate-spin size-6" />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <Image
                                        width={500}
                                        height={350}
                                        className={`w-full lg:w-[545px] h-72 object-cover object-center transition-all duration-500 hover:scale-105 ${
                                            imageLoading ? "opacity-0" : "opacity-100"
                                        }`}
                                        src={data.items[currentFAQ]?.image}
                                        alt={data.items[currentFAQ]?.question}
                                        onLoad={() => setImageLoading(false)}
                                        onLoadStart={() => setImageLoading(true)}
                                        onError={() => setImageLoading(false)}
                                    />
                                </motion.div>

                                <motion.h1
                                    className="text-xl lg:text-2xl font-semibold"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2, duration: 0.3 }}
                                >
                                    {data.items[currentFAQ]?.question}
                                </motion.h1>

                                <motion.p
                                    className="text-content-natural-secondary leading-relaxed"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3, duration: 0.3 }}
                                >
                                    {data.items[currentFAQ]?.answer}
                                </motion.p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </Section.Inner>
        </Section>
    );
}
