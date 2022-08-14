import {
  Container,
  LeftContainer,
  RightContainer,
} from './LoginPageElements';
import { useSelector } from 'react-redux';
import { LoginForm } from '../../Components/Organisms';

function LoginPage() {
  const ss = useSelector((state) => state?.globalReducer?.screenSize);
  return (
    <Container>
      <LeftContainer ss={ss}>
      </LeftContainer>
      <RightContainer ss={ss}>
        <LoginForm />
      </RightContainer>
    </Container>
  );
}

export default LoginPage;
