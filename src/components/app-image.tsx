import React from "react";
import Image, { ImageProps } from "next/image";
import { useTranslations } from "next-intl";

interface Props extends Omit<ImageProps, "alt"> {
    altLocaleKey?: string;
    alt?: string | undefined;
    optimized?: boolean;
}

function AppImage({ altLocaleKey = "default", alt, width = 100, height = 100, optimized = false, ...props }: Props) {
    const t = useTranslations("image_alt");

    if (optimized) {
        return <Image alt={alt || t(altLocaleKey)} width={width} height={height} {...props} />;
    } else {
        return <img alt={alt || t(altLocaleKey)} {...props} src={props.src as string} />;
    }
}

export default AppImage;
