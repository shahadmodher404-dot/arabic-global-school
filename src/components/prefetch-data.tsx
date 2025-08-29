import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

interface Props {
    children: React.ReactNode;
}

async function PrefetchData({ children }: Props) {
    const queryClient = new QueryClient();

    return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>;
}

export default PrefetchData;
