export default function useAuthActions() {
  const login = (username: string, password: string) => {
    console.log(username + ' ' + password);
  };

  return { login };
}
