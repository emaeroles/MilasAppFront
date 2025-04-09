import LoginView from './components/LoginView';

import { useAppSelector } from '../../app/redux/store';

export default function LoginPage() {
  const user = useAppSelector((state) => state.user);

  return (
    <>
      <div>
        <p>{user.id}</p>
        <p>{user.username}</p>
        <p>{user.email}</p>
      </div>
      <LoginView />
    </>
  );
}
