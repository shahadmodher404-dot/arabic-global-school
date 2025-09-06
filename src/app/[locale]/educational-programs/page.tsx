import EducationalProgramsHero from "@/components/educational-programs/educational-programs-hero";
import EducationalProgramsSafeStart from "@/components/educational-programs/educational-programs-safe-start";
import EducationalProgramsValues from "@/components/educational-programs/educational-programs-values";
import ContactSection from "@/components/shared/contact-section";
import LanguageSection from "@/components/shared/language-section";

export default function EducationalProgramsPage() {
    return (
        <main>
            <EducationalProgramsHero />

            <EducationalProgramsSafeStart />

            <EducationalProgramsValues />

            <LanguageSection />

            <ContactSection />
        </main>
    );
}
