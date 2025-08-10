import { ProductsResponse } from '@/types/products';

import { fetchApi } from './api';

const API_BASE_URL = 'https://api.jaar.cloud/api/v1/products';
const API_KEY = 'Bearer 2573|YlpNgvEffABDyLSxjs0oqX5F4qMQj42pAcspcELU401f3550';

export async function getProducts(page = 1, count = 12): Promise<ProductsResponse> {
    return fetchApi<ProductsResponse>(`https://api.jaar.cloud/api/v1/products?page=${page}&page_count=${count}`, {
        next: { revalidate: 60 }, // Cache for 60 seconds
        headers: {
            'Content-Type': 'application/json',
            Authorization: API_KEY
        }
    });
}
