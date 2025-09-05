import ContactSection from "@/components/shared/contact-section";
import HomeActivities from "@/components/home/home-activities";
import HomeArtistic from "@/components/home/home-artistic";
import HomeCurricula from "@/components/home/home-curricula";
import HomeFAQ from "@/components/home/home-faq";
import HomeHero from "@/components/home/home-hero";
import LanguageSection from "@/components/shared/language-section";
import HomeNews from "@/components/home/home-news";
import HomeStep from "@/components/home/home-step";
import PrefetchData from "@/components/prefetch-data";
import { Locale } from "@/i18n/routing";

export default function Home({ params }: { params: Promise<{ locale: Locale }> }) {
    return (
        <main className="min-h-lvh bg-[url('/svg/background-grid.svg')] bg-center w-full overflow-hidden">
            <PrefetchData params={params}>
                <HomeHero />

                <HomeStep />

                <HomeCurricula />

                <LanguageSection />

                <HomeActivities />

                <HomeArtistic />

                <HomeNews />

                <HomeFAQ />

                <ContactSection />
            </PrefetchData>
        </main>
    );
}
