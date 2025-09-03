import { ArrowRightIcon, QuestionMarkIcon } from "@/assets/icons";
import { formateClasses } from "@/lib/utils";
import { useParams } from "next/navigation";
import { Locale } from "@/i18n/routing";

interface FAQButtonProps {
    faq: any;
    index: number;
    isActive: boolean;
    isExpanded?: boolean;
    onClick: () => void;
    isMobile?: boolean;
}

export default function FAQButton({ faq, index, isActive, isExpanded, onClick, isMobile = false }: FAQButtonProps) {
    const { locale } = useParams();
    
    // Extract localized text
    const question = typeof faq.question === 'string' 
        ? faq.question 
        : faq.question?.[locale as Locale] || faq.question?.en || '';

    return (
        <button
            className={formateClasses(
                "px-6 py-4 border rounded-full flex items-center gap-4 w-full text-left transition-all duration-300 cursor-pointer",
                isMobile ? "lg:max-w-full" : "lg:max-w-[545px]",
                isActive ? "bg-[#F2F6FC] border-transparent" : "bg-transparent border-[#D5DEF1]"
            )}
            onClick={onClick}
        >
            <span
                className={formateClasses(
                    "size-[40px] rounded-full grid place-items-center transition-all duration-300",
                    isActive ? "bg-[#020409]" : "bg-[#2F4674]"
                )}
                style={{ boxShadow: "0px 2px 8px 0px #FFFFFF4D inset" }}
            >
                <QuestionMarkIcon />
            </span>

            <p className="font-medium">{question}</p>

            <div className="ms-auto">
                <ArrowRightIcon className="rtl:-scale-x-100 transition-transform duration-300" />
            </div>
        </button>
    );
}
