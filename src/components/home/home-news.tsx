"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import NewsCard from "../news-card";
import Section from "../ui/section";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import useTextDirection from "@/hooks/use-text-direction";
import { useQuery } from "@tanstack/react-query";
import { APIKeys } from "@/services/api-keys";
import { ApiService } from "@/services/api.service";
import { useParams } from "next/navigation";
import { Locale } from "@/i18n/routing";
import { ChevronLeftIcon, ChevronRightIcon } from "@/assets/icons";

export default function HomeNews() {
    const { locale } = useParams();

    const t = useTranslations("home.announcements");
    const [activeIndex, setActiveIndex] = useState(0);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const { dir } = useTextDirection();

    const { data = { items: [] } } = useQuery({
        queryKey: [APIKeys.NEWS_API_KEY, locale],
        queryFn: () => ApiService.getNews(locale as Locale),
    });

    return (
        <Section size="screen" className="bg-[#F7F7E4]">
            <Section.Inner className="space-y-12">
                {/* Section Header */}
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="section-header mb-4">{t("title")}</h1>
                </div>

                {/* News Carousel */}
                <div className="relative">
                    <div className="overflow-hidden">
                        <Swiper
                            dir={dir}
                            spaceBetween={0}
                            slidesPerView={1}
                            modules={[Navigation]}
                            onSlideChange={(swiper) => {
                                setActiveIndex(swiper.activeIndex);
                                setIsBeginning(swiper.isBeginning);
                                setIsEnd(swiper.isEnd);
                            }}
                            onSwiper={(swiper) => {
                                setIsBeginning(swiper.isBeginning);
                                setIsEnd(swiper.isEnd);
                            }}
                            navigation={{
                                nextEl: ".swiper-button-next-custom",
                                prevEl: ".swiper-button-prev-custom",
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {data.items.map((news, i) => (
                                <SwiperSlide key={news.id + news.title + i} className="pb-16 h-full">
                                    <NewsCard
                                        {...news}
                                        className={`mb-8 mx-4 h-full ${i - 1 === activeIndex ? "lg:translate-y-16 lg:rotate-2" : ""}`}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Custom Navigation Buttons */}
                    <button
                        className={`swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center transition-all duration-300 border border-natural-tertiary ${
                            isBeginning ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50 opacity-100 cursor-pointer"
                        }`}
                        disabled={isBeginning}
                    >
                        <ChevronLeftIcon />
                    </button>

                    <button
                        className={`swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center transition-all duration-300 border border-natural-tertiary ${
                            isEnd ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50 opacity-100 cursor-pointer"
                        }`}
                        disabled={isEnd}
                    >
                        <ChevronRightIcon />
                    </button>

                    {/* Custom Pagination */}
                    <div className="swiper-pagination-custom flex justify-center mt-8 gap-2">
                        {/* Pagination bullets will be inserted here by Swiper */}
                    </div>
                </div>
            </Section.Inner>
        </Section>
    );
}
