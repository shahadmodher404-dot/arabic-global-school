import { Locale } from "@/i18n/routing";
import { APIKeys } from "@/services/api-keys";
import { ApiService } from "@/services/api.service";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

interface Props {
    children: React.ReactNode;
    params: Promise<{ locale: Locale }>;
}

async function PrefetchData({ children, params }: Props) {
    const { locale } = await params;
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: [APIKeys.FAQ_API_KEY, locale],
        queryFn: () => ApiService.getFAQs(locale),
    });

    await queryClient.prefetchQuery({
        queryKey: [APIKeys.NEWS_API_KEY, locale],
        queryFn: () => ApiService.getNews(locale),
    });

    return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>;
}

export default PrefetchData;
