// lib/useServerFetch.ts
interface FetchOptions {
  baseUrl: string;
  token?: string;
  defaults?: Record<string, string>;
  params?: Record<string, string | undefined>;
  revalidate?: number;
}

export async function useServerFetch<T>({
  baseUrl,
  token,
  defaults = {},
  params = {},
  revalidate = 60
}: FetchOptions): Promise<T> {
  // Merge defaults + provided params, removing undefined
  const queryParams = new URLSearchParams({
    ...defaults,
    ...Object.fromEntries(
      Object.entries(params)
        .filter(([_, v]) => v !== undefined) as [string, string][]
    )
  });

  const res = await fetch(`${baseUrl}?${queryParams.toString()}`, {
    next: { revalidate },
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: token })
    }
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
  }

  return res.json();
}
