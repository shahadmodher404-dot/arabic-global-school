import { NextRequest, NextResponse } from 'next/server';

const TIMEOUT_MS = 10000; // 10 seconds timeout
const ALLOWED_DOMAINS = ['main-website-api.arabicglobalschool.com'];

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const imageUrl = searchParams.get('url');

        if (!imageUrl) {
            return new NextResponse('URL parameter is required', { status: 400 });
        }

        // Validate the domain
        const url = new URL(imageUrl);
        if (!ALLOWED_DOMAINS.includes(url.hostname)) {
            return new NextResponse('Domain not allowed', { status: 403 });
        }

        // Create AbortController for timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

        try {
            // Fetch the image with timeout
            const response = await fetch(imageUrl, {
                signal: controller.signal,
                headers: {
                    'User-Agent': 'Next.js Image Proxy',
                },
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                return new NextResponse('Failed to fetch image', { status: response.status });
            }

            // Get the image data
            const imageBuffer = await response.arrayBuffer();
            const contentType = response.headers.get('content-type') || 'image/jpeg';

            // Return the image with proper headers
            return new NextResponse(imageBuffer, {
                headers: {
                    'Content-Type': contentType,
                    'Cache-Control': 'public, max-age=86400, s-maxage=86400', // 24 hours cache
                    'Content-Length': imageBuffer.byteLength.toString(),
                },
            });

        } catch (fetchError) {
            clearTimeout(timeoutId);
            
            if (fetchError instanceof Error && fetchError.name === 'AbortError') {
                console.error('Image fetch timeout:', imageUrl);
                return new NextResponse('Image fetch timeout', { status: 504 });
            }
            
            console.error('Image fetch error:', fetchError);
            return new NextResponse('Failed to fetch image', { status: 500 });
        }

    } catch (error) {
        console.error('Image proxy error:', error);
        return new NextResponse('Internal server error', { status: 500 });
    }
}
