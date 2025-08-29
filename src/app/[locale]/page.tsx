import HomeActivities from "@/components/home/home-activities";
import HomeArtistic from "@/components/home/home-artistic";
import HomeCurricula from "@/components/home/home-curricula";
import HomeHero from "@/components/home/home-hero";
import HomeLanguage from "@/components/home/home-language";
import HomeStep from "@/components/home/home-step";

export default function Home() {
    return (
        <main className="min-h-screen bg-[url('/svg/background-grid.svg')] bg-center w-full overflow-x-hidden">
            <HomeHero />

            <HomeStep />

            <HomeCurricula />

            <HomeLanguage />

            <HomeActivities />

            <HomeArtistic />
        </main>
    );
}
