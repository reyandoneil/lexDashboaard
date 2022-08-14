import { InputTextForm, TextContent } from '../../Molecules';
import { Button } from '../../Atoms';
import { FormWrapper } from './LogonFormElements';
import { google_icon } from '../../../Assets';

function LoginForm() {
  return (
    <>
      <TextContent text = {'Hello Again!'}/>
      <FormWrapper>
        <InputTextForm name={'email'} />
        <InputTextForm name={'password'} />
        recovery password
      </FormWrapper>
      <Button title={'Login'} type={'default'} />
      <Button
        title={'Sign in with google'}
        type={'icon'}
        src={google_icon}
      />
    </>
  );
}

export default LoginForm;
