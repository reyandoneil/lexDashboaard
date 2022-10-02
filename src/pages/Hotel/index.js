import { SideForm } from '../../Components/Organisms';
import { TopContent, Content } from './HotelElements';
import { Button } from '../../Components/Atoms';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAddHotel } from '../../Store/Action/HotelAction';
import { ListCard } from '../../Components/Organisms'

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
          title={'Tambah Hotel'}
          onClick={openSideForm}
        />
      </TopContent>
      <Content>
        <ListCard />
      </Content>
      {isAddHotel && <SideForm name="hotel" ss={ss} />}
    </>
  );
}

export default Hotel;
