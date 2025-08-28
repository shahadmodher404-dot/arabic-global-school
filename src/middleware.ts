import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

// export const config = {
//     matcher: [],
// };

export const config = {
    matcher: [
        // Match all pathnames except for:
        // - API routes
        // - Next.js specific files
        // - Static files with common extensions
        "/((?!api|_next|.*\\..+).*)",
        // Match all root level pathnames without extensions (e.g., /about)
        "/",
    ],
};
