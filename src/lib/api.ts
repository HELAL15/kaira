

const API_BASE_URL = 'https://api.jaar.cloud/api/v1';
const TOKEN = '2573|YlpNgvEffABDyLSxjs0oqX5F4qMQj42pAcspcELU401f3550';



export async function fetchApi( endpoint:string, options?:RequestInit) {
  const apiOptions: RequestInit = {
    next: { revalidate: 60 },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TOKEN}`,
      ...(options?.headers || {})
    },
    ...options
  };

  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, apiOptions);

    if (!res.ok) {
      throw new Error(`API error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json()

    return await data;
  } catch (e) {
    console.error('Fetch API error:', e);
    throw e;
  }
}
