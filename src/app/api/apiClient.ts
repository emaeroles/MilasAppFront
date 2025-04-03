const baseUrl = 'https://milasapp.emaeroles.dev/api';

export async function post<T>(url: string, body: T): Promise<Response | null> {
  try {
    return await fetch(baseUrl + url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export async function get(url: string): Promise<Response | null> {
  try {
    return await fetch(baseUrl + url, {
      method: 'GET',
      credentials: 'include',
    });
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

//export default { post, get };
