import { HappyCalenderIcon } from "@/assets/icons";
import { formatDate } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface NewsCardProps {
    id?: string;
    title?: string;
    description?: string;
    image?: string;
    imageAlt?: string;
    created_at?: string;
    className?: string;
}

const defaultData = {
    id: "1",
    title: "Default News Title",
    description: "This is a default description for the news card. Replace it with actual content.",
    image: "/images/news/news-placeholder.jpg",
    imageAlt: "Default news image",
    date: new Date().toISOString(),
};

export default function NewsCard({
    title = defaultData.title,
    description = defaultData.description,
    image = defaultData.image,
    imageAlt = defaultData.imageAlt,
    created_at = defaultData.date,
    className,
}: NewsCardProps) {
    const t = useTranslations();

    return (
        <article
            className={twMerge(
                "p-6 bg-white border-s-4 border-primary flex flex-col gap-6 relative transition-transform duration-300",
                className
            )}
        >
            <div>
                <Image src={image} alt={imageAlt} width={500} height={300} className="w-full h-auto min-h-[354px] object-center object-cover" />
            </div>

            <div className="py-6">
                <h3 className="font-bold text-xl">{title}</h3>
                <p className="text-[#020409] font-extralight mt-2">{description}</p>
            </div>

            <div className="flex items-center gap-2 text-primary">
                <HappyCalenderIcon />
                <span>{formatDate(new Date(created_at), t)}</span>
            </div>

            <img src="/svg/news-card-bottom-icon.svg" className="absolute end-0 bottom-0 translate-4" alt="" />
        </article>
    );
}
