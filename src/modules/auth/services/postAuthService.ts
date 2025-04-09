import { fetchPost } from '../../../app/api/apiClient';
import ENDPOINTS from '../../../app/api/endpoints';

export type AuthOutput = {
  username: string;
  password: string;
};

export type AuthImput = {
  status: number;
  message: string;
  data: {
    id: string;
    username: string;
    email: string;
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
