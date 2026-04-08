const BASE_URL = import.meta.env.VITE_API_URL;

export async function initFetch<T>(url: string, options: RequestInit = {}) {
  const headers = new Headers(options.headers);

  if (!(options.body instanceof FormData)) {
    if (!headers.has("Content-Type")) {
      headers.set("Content-Type", "application/json");
    }
  }

  const response = await fetch(`${BASE_URL}${url}`, {
    ...options,
    headers,
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.message || response.status);

  return data as T;
}
