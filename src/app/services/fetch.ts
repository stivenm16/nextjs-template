export async function fetchData<T>(
  url: string,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(url, options)

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`)
  }

  const data = (await response.json()) as T
  return data
}
