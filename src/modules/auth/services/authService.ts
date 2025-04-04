import postAuthService, {
  AuthOutput,
  AuthImput,
} from '../services/postAuthService';
import AppState from '../../../enums/appState';

export default async function authService(
  username: string,
  password: string
): Promise<AppState> {
  const authOutput: AuthOutput = {
    Username: username,
    Password: password,
  };

  const apiResponse: AuthImput | null = await postAuthService(authOutput);

  if (apiResponse !== null && apiResponse.Status == 200) {
    localStorage.setItem('userId', apiResponse?.Data.Id);
    localStorage.setItem('username', apiResponse?.Data?.Username);

    return AppState.Authorized;
  }

  if (apiResponse !== null && apiResponse.Status == 401)
    return AppState.Unauthorized;

  if (apiResponse !== null && apiResponse.Status == 404)
    return AppState.NotFound;

  // ====================================================

  if (apiResponse !== null && apiResponse.Status == 400)
    return AppState.BadRequest;

  if (apiResponse !== null && apiResponse.Status == 500)
    return AppState.ServerError;

  return AppState.FrontError;
}
