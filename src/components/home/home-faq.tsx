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
import FAQContent from "../FAQ-content";
import FAQButton from "../FAQ-button";



export default function HomeFAQ() {
    const { locale } = useParams();
    const t = useTranslations("home.faq");
    const [currentFAQ, setCurrentFaq] = useState(0);
    const [imageLoadingStates, setImageLoadingStates] = useState<Record<number, boolean>>({});

    const { data = { items: [] } } = useQuery({
        queryKey: [APIKeys.FAQ_API_KEY, locale],
        queryFn: () => ApiService.getFAQs(locale as Locale),
    });

    const handleImageLoadStart = (index: number) => {
        setImageLoadingStates((prev) => ({ ...prev, [index]: true }));
    };

    const handleImageLoad = (index: number) => {
        setImageLoadingStates((prev) => ({ ...prev, [index]: false }));
    };

    const handleImageError = (index: number) => {
        setImageLoadingStates((prev) => ({ ...prev, [index]: false }));
    };

    return (
        <Section size="screen" className="bg-white">
            <Section.Inner>
                <h1 className="section-header max-w-lg">{t("title")}</h1>

                <div className="flex lg:items-center lg:flex-row flex-col gap-8 mt-16">
                    {/* Desktop Layout */}
                    <div className="hidden lg:flex flex-col flex-1 space-y-4">
                        {data.items.map((faq, index) => (
                            <FAQButton
                                key={index + faq.question}
                                faq={faq}
                                index={index}
                                isActive={currentFAQ === index}
                                onClick={() => {
                                    setCurrentFaq(index);
                                    handleImageLoadStart(index);
                                }}
                            />
                        ))}
                    </div>

                    {/* Mobile/Tablet Layout */}
                    <div className="lg:hidden w-full space-y-4">
                        {data.items.map((faq, index) => (
                            <div key={index + faq.question} className="w-full">
                                <FAQButton
                                    faq={faq}
                                    index={index}
                                    isActive={currentFAQ === index}
                                    isExpanded={currentFAQ === index}
                                    onClick={() => {
                                        const newIndex = currentFAQ === index ? -1 : index;
                                        setCurrentFaq(newIndex);
                                        if (newIndex >= 0) {
                                            handleImageLoadStart(index);
                                        }
                                    }}
                                    isMobile
                                />

                                {/* Expandable Content for Mobile/Tablet */}
                                <AnimatePresence>
                                    {currentFAQ === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                transition={{ delay: 0.1, duration: 0.3 }}
                                                className="pt-4 pb-2 px-2"
                                            >
                                                <FAQContent
                                                    faq={faq}
                                                    imageLoading={imageLoadingStates[index] || false}
                                                    onImageLoad={() => handleImageLoad(index)}
                                                    onImageLoadStart={() => handleImageLoadStart(index)}
                                                    onImageError={() => handleImageError(index)}
                                                    isMobile
                                                />
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Content Display */}
                    <div className="lg:max-w-[545px] relative overflow-hidden hidden lg:block">
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
                            >
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.1, duration: 0.3 }}
                                >
                                    {data.items[currentFAQ] && (
                                        <FAQContent
                                            faq={data.items[currentFAQ]}
                                            imageLoading={imageLoadingStates[currentFAQ] || false}
                                            onImageLoad={() => handleImageLoad(currentFAQ)}
                                            onImageLoadStart={() => handleImageLoadStart(currentFAQ)}
                                            onImageError={() => handleImageError(currentFAQ)}
                                        />
                                    )}
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </Section.Inner>
        </Section>
    );
}
