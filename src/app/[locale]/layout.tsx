import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Providers from "../providers";
import TabletFooter from "@/components/tablet-footer";
import MobileFooter from "@/components/mobile-footer";

function Layout({ children }: { children: React.ReactNode }) {
    const messages = useMessages();

    return (
        <NextIntlClientProvider messages={messages}>
            <Providers>
                <Navbar />
                {children}
                <Footer />
                <TabletFooter />
                <MobileFooter />
            </Providers>
        </NextIntlClientProvider>
    );
}
export default Layout;
