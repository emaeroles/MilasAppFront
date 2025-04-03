import { fetchPost } from '../../app/api/apiClient';

export type AuthOutput = {
  Username: string;
  Password: string;
};

export type AuthImput = {
  IsSuccess: boolean;
  Message: string;
  Data: {
    Id: string;
    Username: string;
    Email: string;
  };
};

export default async function postAuth(
  authOutput: AuthOutput
): Promise<AuthImput | null> {
  const response: Response | null = await fetchPost<AuthOutput>(
    '/auth/user',
    authOutput
  );

  if (response?.status == 200) {
    return await response.json();
  }

  return null;
}
