import { useRouter } from 'next/router';
import client from '../lib/axios';

const useLogin = () => {
  const router = useRouter();
  const login = ({
    loginId,
    password,
  }: {
    loginId: string;
    password: string;
  }) => {
    client
      .post('api/v1/auth/login', { loginId, password })
      .then(res => {
        const { data } = res.data;
        const { accessToken } = data;
        localStorage.setItem('accessToken', accessToken);
        router.push('/');
      })
      .catch(err => {
        const { response } = err;
        const { message } = response.data;
        alert(message);
      });
  };
  return {
    login,
  };
};

export default useLogin;
