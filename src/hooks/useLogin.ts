import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
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
        toast.success('로그인 처리 되었습니다.', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(err => {
        const { response } = err;
        const { message } = response.data;
        toast.error(message, {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  return {
    login,
  };
};

export default useLogin;
