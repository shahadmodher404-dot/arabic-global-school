"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { useTranslations } from "next-intl";

interface Props extends Omit<ImageProps, "alt"> {
    altLocaleKey?: string;
    alt?: string | undefined;
    optimized?: boolean;
    fallbackSrc?: string;
    useProxy?: boolean;
}

function AppImage({
    altLocaleKey = "default",
    alt,
    width = 100,
    height = 100,
    optimized = false,
    fallbackSrc = "/images/news/news-placeholder.jpg",
    useProxy = false,
    ...props
}: Props) {
    const t = useTranslations("image_alt");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    // Check if the image is from external domain
    const srcString = typeof props.src === "string" ? props.src : "";
    const isExternalImage = srcString && srcString.startsWith("http");

    // Use proxy for external images from the API domain or when explicitly requested
    const shouldUseProxy = useProxy || (isExternalImage && srcString.includes("main-website-api.arabicglobalschool.com"));

    const imageSrc = shouldUseProxy && srcString ? `/api/image-proxy?url=${encodeURIComponent(srcString)}` : props.src;

    const finalSrc = error ? fallbackSrc : imageSrc;

    if (optimized) {
        return (
            <Image
                alt={alt || t(altLocaleKey)}
                width={width}
                height={height}
                {...props}
                src={finalSrc}
                onError={() => setError(true)}
                onLoad={() => setLoading(false)}
                className={`${props.className || ""} ${loading ? "animate-pulse bg-gray-200" : ""}`}
            />
        );
    } else {
        return (
            <img
                alt={alt || t(altLocaleKey)}
                {...props}
                src={finalSrc as string}
                onError={() => setError(true)}
                onLoad={() => setLoading(false)}
                className={`${props.className || ""} ${loading ? "animate-pulse bg-gray-200" : ""}`}
            />
        );
    }
}

export default AppImage;
