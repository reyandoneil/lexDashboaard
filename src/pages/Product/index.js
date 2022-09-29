import { SideForm, List } from '../../Components/Organisms';
import { TopContent, Content } from './ProductElements';
import { Button } from '../../Components/Atoms';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAddHotel } from '../../Store/Action/HotelAction';
import { useEffect } from 'react';
import { getAllProductByCompanyId } from '../../Store/Action/ProductAction'


function Product() {
  const dispatch = useDispatch();

  const isAddHotel = useSelector(
    (state) => state?.hotelReducer?.isAddHotel
  );
  //GET ALL DATA PRODUCT FROM REDUCER
  const dataProduct = useSelector(
    (state) => state?.productReducer?.dataProduct
  );

  const ss = useSelector((state) => state?.globalReducer?.screenSize);
  const openSideForm = () => {
    dispatch(setIsAddHotel(true));
  };

  //GETALLPRODUCT
  useEffect(() => {
    dispatch(getAllProductByCompanyId(1))
  }, [dispatch])

  console.log(dataProduct);

  return (
    <>
      <TopContent>
        <Button
          type={'add'}
          title={'Tambah Produk'}
          onClick={openSideForm}
        />
      </TopContent>
      <Content>
        <List data={dataProduct} />
      </Content>
      {isAddHotel && <SideForm name="product" ss={ss} />}
    </>
  );
}

export default Product;
