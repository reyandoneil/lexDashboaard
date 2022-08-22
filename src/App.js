import { useEffect } from 'react';
import GlobalStyle from './utils/globalStyle';
import Router from './utils/Router';
import useBreakPoint from './utils/BreakPoint/index';
import { useDispatch } from 'react-redux';
import { setScreenSize } from './Store/Action/GlobalAction';
import { setIsLogin } from './Store/Action/UserAction';

function App() {
  const access_token = localStorage.getItem('access_token');
  const dispatch = useDispatch();
  const breakPoint = useBreakPoint();
  //SCREEN SIZE
  useEffect(() => {
    dispatch(setScreenSize(breakPoint));
  }, [breakPoint, dispatch]);
  //ASSIGN IS LOGIN BY ACCESS TOKEN
  useEffect(() => {
    const getAccessToken = () => {
      if (access_token) {
        dispatch(setIsLogin(true));
      } else {
        dispatch(setIsLogin(false));
      }
    };
    getAccessToken();
  }, [access_token, dispatch]);
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
