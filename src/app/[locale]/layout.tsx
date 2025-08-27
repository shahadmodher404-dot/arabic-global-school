import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Providers from "../providers";

function Layout({ children }: { children: React.ReactNode }) {
    const messages = useMessages();

    return (
        <NextIntlClientProvider messages={messages}>
            <Providers>
                <Navbar />
                {children}
                <Footer />
            </Providers>
        </NextIntlClientProvider>
    );
}
export default Layout;
