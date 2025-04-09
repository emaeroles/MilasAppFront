import LoginView from './components/LoginView';

import { useAppSelector } from '../../app/redux/store';

export default function LoginPage() {
  const user = useAppSelector((state) => state.user);

  return (
    <>
      <div>
        <p>{user.Id}</p>
        <p>{user.Username}</p>
        <p>{user.Email}</p>
      </div>
      <LoginView />
    </>
  );
}
