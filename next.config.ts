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
    },
};

export default withNextIntl(nextConfig);
