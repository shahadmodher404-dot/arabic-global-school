import ContactSection from "@/components/contact-section";
import ServicesFacilities from "@/components/services/services-facilities";
import ServicesHero from "@/components/services/services-hero";
import ServicesSafety from "@/components/services/services-safety";

export default function ServicesPage() {
    return (
        <main>
            <ServicesHero />

            <ServicesFacilities />

            <ServicesSafety />

            <ContactSection />
        </main>
    );
}
