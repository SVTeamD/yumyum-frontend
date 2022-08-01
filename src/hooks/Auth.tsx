import { useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const REST_API_KEY = '32477a8641e9c8898852ad84876cb9ba';
  const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
  const CLIENT_SECRET = '';

  const code = new URL(window.location.href).searchParams.get('code');
  const history = useNavigate();

  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: 'authorization_code',
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET
    });

    try {
      const res = await axios.post(
        'https://kauth.kakao.com/oauth/token',
        payload
      );
      window.Kakao.init(REST_API_KEY);
      window.Kakao.Auth.setAccessToken(res.data.access_token);
      localStorage.setItem('bearer', res.data.access_token);
      localStorage.setItem('login', 'true');
      history('/');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return null;
};

export default Auth;
