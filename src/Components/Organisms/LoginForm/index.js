import { InputTextForm, TextContent } from '../../Molecules';
import { Button } from '../../Atoms';
import { FormWrapper, LoginFormWrapper,Space } from './LogonFormElements';
import { loginUser } from '../../../Store/Action/UserAction';
import { google_icon } from '../../../Assets';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

function LoginForm() {
  const dispatch = useDispatch();
  const ss = useSelector((state) => state?.globalReducer?.screenSize);
  const initialValue = {
    email: '',
    password: '',
  };
  const [values, setValues] = useState(initialValue);
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(values.email, values.password)).then(() => {
      setValues(initialValue);
    });
  };
  console.log(values);

  return (
    <LoginFormWrapper ss={ss}>
      <TextContent title={'Sign in '} />
      <FormWrapper onSubmit={loginSubmit}>
        <InputTextForm
          id={'email'}
          name={'email'}
          label={'User email'}
          type={'email'}
          value={values['email']}
          placeholder={'User email'}
          onChange={onChange}
          autoComplete={'off'}
        />

        <InputTextForm
          id={'password'}
          name={'password'}
          label={'Password'}
          type={'password'}
          value={values['password']}
          placeholder={'Password123'}
          onChange={onChange}
          autoComplete={'off'}
        />
        <Space/>
        <Button title={'Login'} type={'default'} />
        <Button
          title={'Sign in with google'}
          type={'icon'}
          src={google_icon}
        />
      </FormWrapper>
    </LoginFormWrapper>
  );
}

export default LoginForm;
