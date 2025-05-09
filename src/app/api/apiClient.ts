export async function fetchGet(url: string): Promise<Response | null> {
  try {
    return await fetch(url, {
      method: 'GET',
      credentials: 'include',
    });
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export async function fetchPost<T>(
  url: string,
  body: T
): Promise<Response | null> {
  try {
    return await fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export async function fetchPut<T>(
  url: string,
  body: T
): Promise<Response | null> {
  try {
    return await fetch(url, {
      method: 'PUT',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export async function fetchPatch<T>(
  url: string,
  body: T
): Promise<Response | null> {
  try {
    return await fetch(url, {
      method: 'PATCH',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export async function fetchTogglePost(url: string): Promise<Response | null> {
  try {
    return await fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export async function fetchDelete(url: string): Promise<Response | null> {
  try {
    return await fetch(url, {
      method: 'DELETE',
      credentials: 'include',
    });
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}
