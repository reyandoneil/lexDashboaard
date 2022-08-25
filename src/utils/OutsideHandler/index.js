import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setProfileMenu } from '../../Store/Action/UserAction';
export default function OutsideHandler(name) {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    if (ref?.current?.contains(e?.target) ) {
      // inside click
      return;
    } 
    switch (name) {
      case 'profile':
        dispatch(setProfileMenu(false));
        break;
      default:
        break;
    }
    // outside click
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });

  return { ref };
}
