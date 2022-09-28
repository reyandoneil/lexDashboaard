import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Master() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/dashboard/master/product');
  }, [navigate]);
  return <></>;
}

export default Master;
