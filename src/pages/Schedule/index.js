import { SideForm } from '../../Components/Organisms';
import { TopContent, Content } from './ScheduleElements';
import { Button } from '../../Components/Atoms';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAddHotel } from '../../Store/Action/HotelAction';

function Hotel() {
  const dispatch = useDispatch();
  const isAddHotel = useSelector(
    (state) => state?.hotelReducer?.isAddHotel
  );
  const ss = useSelector((state) => state?.globalReducer?.screenSize);
  const openSideForm = () => {
    dispatch(setIsAddHotel(true));
  };

  return (
    <>
      <TopContent>
        <Button
          type={'add'}
          title={'Tambah Jadwal Pemberangkatan'}
          onClick={openSideForm}
        />
      </TopContent>
      <Content>content</Content>
      {isAddHotel && <SideForm name="schedule" ss={ss} />}
    </>
  );
}

export default Hotel;
