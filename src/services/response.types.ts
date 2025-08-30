export interface RootResponse<T = any> {
    items: T[];
    total_pages: number;
    per_page: number;
    current_page: number;
}

export interface Faq {
    id: string;
    question: string;
    answer: string;
    image: string;
    is_visible: Isvisible;
    created_at: string;
}

export interface News {
    id: string;
    title: string;
    description: string;
    image: string;
    is_visible: Isvisible;
    category: Isvisible;
    created_at: string;
}

interface Isvisible {
    value: number;
    label: string;
}
