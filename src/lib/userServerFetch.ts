interface FetchOptions {
  baseUrl: string;
  options?: RequestInit;
  defaults?: Record<string, string>;
  params?: Record<string, string | undefined>;
  revalidate?: number;
}

export async function useServerFetch<T>({
  baseUrl,
  options,
  params = {},
  revalidate = 60
}: FetchOptions): Promise<T> {
  // Merge defaults + provided params, removing undefined
  const queryParams = new URLSearchParams({
    ...Object.fromEntries(
      Object.entries(params)
        .filter(([_, v]) => v !== undefined) as [string, string][]
    )
  });

  const queryString = queryParams.toString();

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer 2573|YlpNgvEffABDyLSxjs0oqX5F4qMQj42pAcspcELU401f3550`,
    ...(options?.headers || {})
  };

  try {
    const res = await fetch(`${baseUrl}${queryString ? `?${queryString}` : ''}`, {
      next: { revalidate },
      headers,
      ...options
    });

   

    return res.json();
  } catch (error) {
    console.error(`Error fetching from ${baseUrl}:`, error);
    throw error; // أو return null;
  }
}
