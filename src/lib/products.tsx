import { ProductsResponse } from '@/types/products';

import { fetchApi } from './api';

export async function getProducts(
    page = '1',
    count = '12',
    params: {
        [key: string]: string;
    }
) {
    return fetchApi(`/products?page=${page}&page_count=${count}`, {
        ...params
    });
}
