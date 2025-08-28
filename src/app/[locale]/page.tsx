import HomeActivities from "@/components/home/home-activities";
import HomeCurricula from "@/components/home/home-curricula";
import HomeHero from "@/components/home/home-hero";
import HomeLanguage from "@/components/home/home-language";
import HomeStep from "@/components/home/home-step";

export default function Home() {
    return (
        <main className="min-h-screen bg-[url('/svg/background-grid.svg')] bg-center">
            <HomeHero />

            <HomeStep />

            <HomeCurricula />

            <HomeLanguage />

            <HomeActivities />
        </main>
    );
}
