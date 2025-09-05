import EducationalProgramsHero from "@/components/educational-programs/educational-programs-hero";
import ContactSection from "@/components/shared/contact-section";
import LanguageSection from "@/components/shared/language-section";

export default function EducationalProgramsPage() {
    return (
        <main>
            <EducationalProgramsHero />

            <LanguageSection />

            <ContactSection />
        </main>
    );
}
