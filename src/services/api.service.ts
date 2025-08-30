import { Locale } from "@/i18n/routing";
import { API } from "./api.base";
import { Faq, News, RootResponse } from "./response.types";

export class ApiService {
    static async getFAQs(lang: Locale) {
        const response = await API.get<RootResponse<Faq>>("/questions?is_visible=1", {
            headers: { lang },
        });
        return response.data;
    }

    static async getFAQById(id: string, lang: Locale) {
        const response = await API.get<RootResponse<Faq>>(`/questions/${id}?is_visible=1`, {
            headers: { lang },
        });
        return response.data;
    }

    static async getNews(lang: Locale) {
        const response = await API.get<RootResponse<News>>("/news?is_visible=1", {
            headers: { lang },
        });
        return response.data;
    }

    static async getNewsById(id: string, lang: Locale) {
        const response = await API.get<RootResponse<News>>(`/news${id}?is_visible=1`, {
            headers: { lang },
        });
        return response.data;
    }
}
