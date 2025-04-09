import { useAppDispatch } from '../../../app/redux/store';
import { addUser } from '../store/userSlice';

import postAuthService, { AuthOutput } from '../services/postAuthService';

export default function useAuthActions() {
  const dispatch = useAppDispatch();

  function login(username: string, password: string) {
    const outhPut: AuthOutput = { Username: username, Password: password };
    postAuthService(outhPut).then((response) => {
      if (response != null && response.Status == 200) {
        dispatch(addUser(response.Data));
      }
    });
  }
  return { login };
}
