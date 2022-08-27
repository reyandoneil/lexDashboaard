import { InputTextForm, TextContent, ErrorMessage } from '../../Molecules';
import { Button } from '../../Atoms';
import {
  FormWrapper,
  LoginFormWrapper,
  Space,
} from './LogonFormElements';
import { loginUser } from '../../../Store/Action/UserAction';
import { google_icon } from '../../../Assets';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

function LoginForm() {
  const dispatch = useDispatch();
  // const [showPassword, setShowPassword] = useState(false);
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

  return (
    <LoginFormWrapper ss={ss}>
      <TextContent title={'Hallo again boskuh..!'} />
      <FormWrapper onSubmit={loginSubmit}>
        <ErrorMessage />
        <InputTextForm
          id={'email'}
          name={'email'}
          label={'User email'}
          type={'email'}
          value={values.email}
          placeholder={'User email'}
          onChange={onChange}
          autoComplete={'off'}
        />

        <InputTextForm
          id={'password'}
          name={'password'}
          label={'Password'}
          type={'password'}
          value={values.password}
          placeholder={'Password123'}
          onChange={onChange}
          autoComplete={'off'}
        />
        <Space />
        <Button title={'Login'} type={'default'} />
      </FormWrapper>
      <Button
        title={'Sign in with google'}
        type={'icon'}
        src={google_icon}
      />
    </LoginFormWrapper>
  );
}

export default LoginForm;
