import { useEffect, useState } from 'react';
import {
  Container,
  LeftContainer,
  RightContainer,
  Img,
} from './LoginPageElements';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LoginForm } from '../../Components/Organisms';
import { img01 } from '../../Assets';

function LoginPage() {
  //SCREEN SIZE
  const ss = useSelector((state) => state?.globalReducer?.screenSize);
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

  return (
    <Container>
      <LeftContainer ss={ss}>
        <Img src={img01} />
      </LeftContainer>
      <RightContainer ss={ss}>
        <LoginForm />
      </RightContainer>
    </Container>
  );
}

export default LoginPage;
