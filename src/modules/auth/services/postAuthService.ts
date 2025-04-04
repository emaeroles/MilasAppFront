import { fetchPost } from '../../../app/api/apiClient';
import ENDPOINTS from '../../../app/api/endpoints';

export type AuthOutput = {
  Username: string;
  Password: string;
};

export type AuthImput = {
  Status: number;
  Message: string;
  Data: {
    Id: string;
    Username: string;
    Email: string;
  };
};

export default async function postAuthService(
  authOutput: AuthOutput
): Promise<AuthImput | null> {
  const response: Response | null = await fetchPost<AuthOutput>(
    ENDPOINTS.AUTH.LOGIN,
    authOutput
  );

  if (response != null) {
    return await response.json();
  }

  return null;
}
