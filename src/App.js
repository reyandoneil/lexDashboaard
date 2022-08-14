import { useEffect } from 'react';
import GlobalStyle from './utils/globalStyle';
import Router from './utils/Router';
import useBreakPoint from './utils/BreakPoint/index';
import { useDispatch } from 'react-redux';
import { setScreenSize } from './Store/Action/GlobalAction';

function App() {
  const dispatch = useDispatch();
  const breakPoint = useBreakPoint();
  useEffect(() => {
    dispatch(setScreenSize(breakPoint));
  }, [breakPoint, dispatch]);
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
