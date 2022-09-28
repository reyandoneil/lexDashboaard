import { SideForm } from '../../Components/Organisms';
import { TopContent, Content } from './HotelElements';
import { useSelector } from 'react-redux';

function Hotel() {
  const ss = useSelector((state) => state?.globalReducer?.screenSize);
  return (
    <>
      <TopContent>
      </TopContent>
      <Content>content</Content>
      <SideForm name="hotel" ss={ss} />
    </>
  );
}

export default Hotel;
