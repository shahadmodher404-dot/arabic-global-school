import { formateClasses } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Locale } from "@/i18n/routing";

interface FAQContentProps {
    faq: any;
    imageLoading: boolean;
    onImageLoad: () => void;
    onImageLoadStart: () => void;
    onImageError: () => void;
    isMobile?: boolean;
}

export default function FAQContent({ faq, imageLoading, onImageLoad, onImageLoadStart, onImageError, isMobile = false }: FAQContentProps) {
    const { locale } = useParams();
    
    // Extract localized text
    const question = typeof faq.question === 'string' 
        ? faq.question 
        : faq.question?.[locale as Locale] || faq.question?.en || '';
    
    const answer = typeof faq.answer === 'string' 
        ? faq.answer 
        : faq.answer?.[locale as Locale] || faq.answer?.en || '';

    return (
        <div className={`space-y-${isMobile ? "4" : "6"}`}>
            <div className="overflow-hidden rounded-3xl relative w-full">
                {/* Loading Skeleton */}
                {imageLoading && (
                    <div
                        className={`absolute size-full inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse ${
                            isMobile ? "w-full" : "w-full lg:w-[545px]"
                        }`}
                    >
                        <div className={`w-full ${isMobile ? "h-[250px]" : "h-[300px]"} bg-gray-300 rounded-3xl`}>
                            <div className="flex items-center justify-center h-full">
                                <Loader2 className="text-white animate-spin size-6" />
                            </div>
                        </div>
                    </div>
                )}

                <Image
                    width={500}
                    height={isMobile ? 300 : 350}
                    className={formateClasses(
                        `w-full object-cover object-center transition-all duration-500`,
                        isMobile ? "h-64" : "h-72 lg:w-[545px] hover:scale-105",
                        imageLoading ? "opacity-0" : "opacity-100"
                    )}
                    src={faq.image}
                    alt={question}
                    onLoad={onImageLoad}
                    onLoadStart={onImageLoadStart}
                    onError={onImageError}
                />
            </div>

            <h3 className={`font-semibold ${isMobile ? "text-lg" : "text-xl lg:text-2xl"}`}>{question}</h3>

            <p className={`text-content-natural-secondary leading-relaxed ${isMobile ? "text-sm" : ""}`}>{answer}</p>
        </div>
    );
}
