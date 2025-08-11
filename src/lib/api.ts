

import type { AxiosRequestConfig } from "axios";
import { axiosInstance } from "./axiosInstance";



export default class Api {
  static async get(url: string, options?: AxiosRequestConfig & { params?: Record<string, string | undefined> }) {
    try {
      const res = await axiosInstance.get(url, {
        ...options,
        params: options?.params || {}
      });

      return res.data;
    } catch (error) {
      console.error(`GET ${url} failed:`, error);
      throw error;
    }
  }

  async post(url: string, data?: AxiosRequestConfig, options?: AxiosRequestConfig & { params?: Record<string, string | undefined> }) {
    try {
      const res = await axiosInstance.post(url, data, {
        ...options,
        params: options?.params || {}
      });

      return res.data;
    } catch (error) {
      console.error(`POST ${url} failed:`, error);
      throw error;
    }
  }

  async put(url: string, data?: AxiosRequestConfig, options?: AxiosRequestConfig & { params?: Record<string, string | undefined> }) {
    try {
      const res = await axiosInstance.put(url, data, {
        ...options,
        params: options?.params || {}
      });

      return res.data;
    } catch (error) {
      console.error(`PUT ${url} failed:`, error);
      throw error;
    }
  }

  async delete(url: string, options?: AxiosRequestConfig & { params?: Record<string, string | undefined> }) {
    try {
      const res = await axiosInstance.delete(url, {
        ...options,
        params: options?.params || {}
      });

      return res.data;
    } catch (error) {
      console.error(`DELETE ${url} failed:`, error);
      throw error;
    }
  }
}

