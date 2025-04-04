import useAuthActions from '../hooks/useAuthActions';
import './LoginView.modules.css';

export default function LoginView() {
  const { login } = useAuthActions();

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    login(username, password);
  }

  return (
    <div className='login'>
      <h1 className='login__title'>MilasApp</h1>
      <form className='login__card' onSubmit={handleLogin}>
        <label className='login__label'>
          Username:
          <input name='username' type='text'></input>
        </label>
        <label className='login__label'>
          Password:
          <input name='password' type='password'></input>
        </label>
        <button className='login__btn' type='submit'>
          Login
        </button>
      </form>
    </div>
  );
}
