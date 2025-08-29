"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import NewsCard from "../news-card";
import Section from "../ui/section";

// Import Swiper styles
import useTextDirection from "@/hooks/use-text-direction";
import "swiper/css";
import "swiper/css/navigation";

export default function HomeNews() {
    const t = useTranslations("home.announcements");
    const [activeIndex, setActiveIndex] = useState(0);
    const { dir } = useTextDirection();

    // Sample news data - replace with actual data
    const newsData = [
        {
            id: "1",
            title: t("exam"),
            description: "Midterm exams for the Primary Level will now begin on September 20, 2025, instead of September 18,...",
            image: "/images/hero-image.jpg",
            imageAlt: "School playground",
            date: "2025-06-25",
        },
        {
            id: "2",
            title: t("exam"),
            description: "Midterm exams for the Primary Level will now begin on September 20, 2025, instead of September 18,...",
            image: "/images/hero-image.jpg",
            imageAlt: "School playground",
            date: "2025-06-25",
        },
        {
            id: "3",
            title: t("exam"),
            description: "Midterm exams for the Primary Level will now begin on September 20, 2025, instead of September 18,...",
            image: "/images/hero-image.jpg",
            imageAlt: "School playground",
            date: "2025-06-25",
        },
        {
            id: "1",
            title: t("exam"),
            description: "Midterm exams for the Primary Level will now begin on September 20, 2025, instead of September 18,...",
            image: "/images/hero-image.jpg",
            imageAlt: "School playground",
            date: "2025-06-25",
        },
        {
            id: "2",
            title: t("exam"),
            description: "Midterm exams for the Primary Level will now begin on September 20, 2025, instead of September 18,...",
            image: "/images/hero-image.jpg",
            imageAlt: "School playground",
            date: "2025-06-25",
        },
        {
            id: "3",
            title: t("exam"),
            description: "Midterm exams for the Primary Level will now begin on September 20, 2025, instead of September 18,...",
            image: "/images/hero-image.jpg",
            imageAlt: "School playground",
            date: "2025-06-25",
        },
    ];

    return (
        <Section size="screen" className="bg-[#F7F7E4]">
            <div className="space-y-12">
                {/* Section Header */}
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="font-bold text-3xl md:text-[40px] lg:text-[48px] mb-4">{t("title")}</h2>
                </div>

                {/* News Carousel */}
                <div className="relative">
                    <div className="overflow-hidden">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={0}
                            slidesPerView={1}
                            dir={dir}
                            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                            navigation={{
                                nextEl: ".swiper-button-next-custom",
                                prevEl: ".swiper-button-prev-custom",
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 30,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {newsData.map((news, i) => (
                                <SwiperSlide key={news.id + news.title + i} className="pb-16">
                                    <NewsCard {...news} className={`mb-8 mx-4 ${i - 1 === activeIndex ? "md:translate-y-16 md:rotate-2" : ""}`} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Custom Navigation Buttons */}
                    <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Custom Pagination */}
                    <div className="swiper-pagination-custom flex justify-center mt-8 gap-2">
                        {/* Pagination bullets will be inserted here by Swiper */}
                    </div>
                </div>
            </div>
        </Section>
    );
}
