import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  //CHECK IS LOGIN
  const isLogin = useSelector((state) => state?.userReducer?.isLogin);
  const navigate = useNavigate();
  const [auth, setAuth] = useState();

  useEffect(() => {
    setAuth(isLogin);
    if (auth === true) {
      navigate('/dashboard/home');
    }
  }, [isLogin, auth, navigate]);
  return <div>RegisterPage</div>;
}

export default RegisterPage;
