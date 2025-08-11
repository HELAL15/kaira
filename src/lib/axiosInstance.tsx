import axios from 'axios';

const baseUrl = process.env.BASE_URL || 'https://api.jaar.cloud/api/v1';
const lang = 'en';

export const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
        'accept-language': lang,
        Lang: lang
    }
});

axiosInstance.interceptors.request.use(
    (config) => {
        try {
            const token = 'Bearer 2573|YlpNgvEffABDyLSxjs0oqX5F4qMQj42pAcspcELU401f3550';

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }

            if (lang) {
                config.headers['Accept-Language'] = lang;
                config.headers['Lang'] = lang;
            }

            return config;
        } catch (error) {
            return Promise.reject(error);
        }
    },
    (error) => {
        return Promise.reject({
            message: 'Error in request interceptor',
            error
        });
    }
);
