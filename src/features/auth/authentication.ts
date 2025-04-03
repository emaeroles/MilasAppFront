import postAuth, { AuthOutput, AuthImput } from './authApi';

export default async function authentication(
  username: string,
  password: string
) {
  const authOutput: AuthOutput = {
    Username: username,
    Password: password,
  };

  const apiResponse: AuthImput | null = await postAuth(authOutput);

  if (apiResponse !== null) {
    localStorage.setItem('userId', apiResponse?.Data.Id);
    localStorage.setItem('username', apiResponse?.Data?.Username);

    return true;
  }

  return false;
}
