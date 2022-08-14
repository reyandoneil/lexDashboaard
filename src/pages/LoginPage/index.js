import {
  Container,
  LeftContainer,
  RightContainer,
} from './LoginPageElements';

import { LoginForm } from '../../Components/Organisms';

function LoginPage() {
  return (
    <Container>
      <LeftContainer></LeftContainer>
      <RightContainer>
        <LoginForm />
      </RightContainer>
    </Container>
  );
}

export default LoginPage;
