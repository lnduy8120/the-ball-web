import { config } from '@/config';

export const serverApi = {
    get: async <T>(url: string, params?: Record<string, any>): Promise<T> => {
        const searchParams = new URLSearchParams();
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined) {
                    searchParams.append(key, String(value));
                }
            });
        }

        const fullUrl = `${config.api.url}${url}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
        console.log(`[ServerAPI] Fetching: ${fullUrl}`);

        const res = await fetch(fullUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'Cache-Control': 'no-cache', // Optional: disable Next.js caching if needed
            },
            next: { revalidate: 60 }, // Revalidate every 60 seconds by default
        });

        if (!res.ok) {
            // Handle error gracefully
            console.error(`[ServerAPI] Error fetching ${fullUrl}: ${res.statusText}`);
            throw new Error(`Failed to fetch ${fullUrl}`);
        }

        return res.json();
    },
};
