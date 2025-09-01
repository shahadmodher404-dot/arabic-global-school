import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'main-website-api.arabicglobalschool.com',
                pathname: '/uploads/**',
            },
        ],
        // Increase timeout for slow external images
        dangerouslyAllowSVG: false,
        // Add image optimization settings
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        formats: ['image/webp'],
        // Set minimum cache TTL to 60 seconds
        minimumCacheTTL: 60,
    },
    // Add experimental features for better image handling
    experimental: {
        esmExternals: true,
    },
};

export default withNextIntl(nextConfig);
