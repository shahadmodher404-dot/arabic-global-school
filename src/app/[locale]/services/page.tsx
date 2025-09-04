import ContactSection from "@/components/contact-section";
import ServicesFacilities from "@/components/services/services-facilities";
import ServicesHero from "@/components/services/services-hero";
import ServicesMeal from "@/components/services/services-meal";
import ServicesSafety from "@/components/services/services-safety";
import ServicesTransportation from "@/components/services/services-transportation";

export default function ServicesPage() {
    return (
        <main>
            <ServicesHero />

            <ServicesFacilities />

            <ServicesSafety />

            <ServicesTransportation />

            <ServicesMeal />

            <ContactSection />
        </main>
    );
}
