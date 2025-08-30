"use client";

import { useTranslations } from "next-intl";
import Section from "../ui/section";
import { ArrowRightIcon, QuestionMarkIcon } from "@/assets/icons";
import { useState } from "react";
import { formateClasses } from "@/lib/utils";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const faqs = Array.from({ length: 5 }).map((_, index) => ({
    title: `How does the school care for teaching Islamic values?`,
    answer: `We emphasize Islamic values throughout our educational process. Our curriculum includes the international ICO program for Arabic and Islamic studies, along with Noor Al-Bayan for Quran memorization and simplified Tajweed instruction from an early age. We also incorporate ethics and Islamic manners into daily lessons, guided by teachers who exemplify these values, fostering a balanced generation confident in their identity.`,
}));

export default function HomeFAQ() {
    const t = useTranslations("home.faq");
    const [currentFAQ, setCurrentFaq] = useState(0);

    return (
        <Section size="screen" className="bg-white">
            <div className="">
                <h1 className="section-header max-w-lg">{t("title")}</h1>

                <div className="flex lg:items-center lg:flex-row flex-col gap-8 mt-8">
                    <div className="flex-1 space-y-4">
                        {faqs.map((faq, index) => (
                            <button
                                className={formateClasses(
                                    "px-6 py-4 border rounded-full flex items-center gap-4 w-full text-left lg:max-w-[545px] transition-all duration-300 cursor-pointer",
                                    currentFAQ === index ? "bg-[#F2F6FC] border-transparent" : "bg-transparent border-[#D5DEF1]"
                                )}
                                key={index + faq.title}
                                onClick={() => setCurrentFaq(index)}
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

                                <p className="font-medium">{faq.title}</p>

                                <div className="ms-auto">
                                    <ArrowRightIcon />
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
                                    className="overflow-hidden rounded-3xl"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.1, duration: 0.3 }}
                                >
                                    <Image
                                        width={500}
                                        height={300}
                                        className="w-full h-auto transition-transform duration-500 hover:scale-105"
                                        src={"/images/news/news-placeholder.jpg"}
                                        alt={faqs[currentFAQ].title}
                                    />
                                </motion.div>

                                <motion.h1
                                    className="text-xl lg:text-2xl font-semibold"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2, duration: 0.3 }}
                                >
                                    {faqs[currentFAQ].title}
                                </motion.h1>

                                <motion.p
                                    className="text-content-natural-secondary leading-relaxed"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3, duration: 0.3 }}
                                >
                                    {faqs[currentFAQ].answer}
                                </motion.p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </Section>
    );
}
