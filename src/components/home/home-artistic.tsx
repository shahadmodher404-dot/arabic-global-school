import { useTranslations } from "next-intl";
import Section from "../ui/section";
import VideoPlayer from "../ui/video-player";
import Image from "next/image";
import { Button } from "../ui/button";

export default function HomeArtistic() {
    const t = useTranslations("home.artistic");

    return (
        <Section size="screen" className="bg-white">
            <div className="space-y-16">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="">
                        <h1 className="section-header max-w-2xl">{t("title")}</h1>
                    </div>
                    
                    <p className="section-description max-w-xl">{t("desc")}</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="space-y-6 relative px-16 py-20 order-2 lg:order-1">
                        <Image
                            src="/images/artistic/image.png"
                            alt={"Artistic background element"}
                            width={500}
                            height={300}
                            className="pointer-events-none absolute left-0 top-0"
                            priority
                        />

                        <h2 className="text-2xl md:text-3xl lg:text-[36px] relative z-10 max-w-sm">{t("art")}</h2>
                        <Button shadow="default" className="rounded-full px-6 py-3">{t("explore")}</Button>
                    </div>

                    <div className="h-[568px] order-1 lg:order-2">
                        <VideoPlayer
                            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                            poster="/images/artistic/video-cover.jpg"
                            className="lg:aspect-video w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
}
