import {
  SideFormWrapper,
  TitleFormContainer,
  SideFormBackground,
  ContentSideFormWrapper,
  Text,
  InputWrapper,
  FormWrapper,
} from './SideFormElements';
import { useDispatch } from 'react-redux'
import { addProduct } from '../../../Store/Action/ProductAction'
import { InputTextForm } from '../../Molecules';
import { Button } from '../../Atoms';
import { useState } from 'react';
import OutsideHandler from '../../../utils/OutsideHandler';
import Product from '../../../pages/Product';

function SideForm({ name, ss }) {
  const dispatch = useDispatch()
  const { ref } = OutsideHandler('hotel');

  const [hotelValues, setHotelValues] = useState({
    hotelName: '',
    hotelAddress: '',
    country: '',
    rating: '',
  });

  const [ProductValue, setProductValue] = useState({
    companyId: 1,
    packageName: '',
    totalDays: '',
    quota: '',
    active: true,
    userIdCreatedBy: '1'
  });
  const addHotelHandler = (e) => { };

  const addProductHandler = (e) => {
    e.preventDefault();
    dispatch(addProduct(ProductValue))
  }

  const onChangeHotelForm = (e) => {
    const { name, value } = e.target;
    setHotelValues({ ...hotelValues, [name]: value });
  };

  const onChangeProductForm = (e) => {
    const { name, value } = e.target;
    setProductValue({ ...ProductValue, [name]: value });
  };
  console.log(ProductValue);

  switch (name) {
    case 'hotel':
      return (
        <>
          <SideFormWrapper>
            <SideFormBackground ss={ss} />
            <ContentSideFormWrapper ss={ss} ref={ref}>
              <TitleFormContainer>
                <Text>Tambah Hotel</Text>
              </TitleFormContainer>
              <FormWrapper onSubmit={addHotelHandler}>
                <InputWrapper>
                  <InputTextForm
                    id={'hotelName'}
                    name={'hotelName'}
                    label={'Nama Hotel'}
                    type={'text'}
                    value={hotelValues.hotelName}
                    placeholder={'Nama Hotel'}
                    onChange={onChangeHotelForm}
                    autoComplete={'off'}
                  />
                  <InputTextForm
                    id={'hotelAddress'}
                    name={'hotelAddress'}
                    label={'Alamat Hotel'}
                    type={'text'}
                    value={hotelValues.hotelAddress}
                    placeholder={'Alamat hotel'}
                    onChange={onChangeHotelForm}
                    autoComplete={'off'}
                  />
                  <InputTextForm
                    id={'country'}
                    name={'country'}
                    label={'Negara'}
                    type={'text'}
                    value={hotelValues.country}
                    placeholder={'Nama Negara'}
                    onChange={onChangeHotelForm}
                    autoComplete={'off'}
                  />
                  <InputTextForm
                    id={'rating'}
                    name={'rating'}
                    label={'Rating'}
                    type={'number'}
                    value={hotelValues.rating}
                    placeholder={'Rating'}
                    onChange={onChangeHotelForm}
                    autoComplete={'off'}
                  />
                </InputWrapper>
                <Button title={'Simpan'} type={'default'} />
              </FormWrapper>
            </ContentSideFormWrapper>
          </SideFormWrapper>
        </>
      );
    case 'product':
      return (
        <>
          <SideFormWrapper>
            <SideFormBackground ss={ss} />
            <ContentSideFormWrapper ss={ss} ref={ref}>
              <TitleFormContainer>
                <Text>Tambah Produk</Text>
              </TitleFormContainer>
              <FormWrapper onSubmit={addProductHandler}>
                <InputWrapper>
                  <InputTextForm
                    id={'packageName'}
                    name={'packageName'}
                    label={'Nama Paket'}
                    type={'text'}
                    value={ProductValue.packageName}
                    placeholder={'Nama Paket'}
                    onChange={onChangeProductForm}
                    autoComplete={'off'}
                  />
                  <InputTextForm
                    id={'totalDays'}
                    name={'totalDays'}
                    label={'Jumlah Hari'}
                    type={'number'}
                    value={Product.totalDays}
                    placeholder={'9'}
                    onChange={onChangeProductForm}
                    autoComplete={'off'}
                  />  <InputTextForm
                    id={'quota'}
                    name={'quota'}
                    label={'Quota'}
                    type={'number'}
                    value={Product.quota}
                    placeholder={'45'}
                    onChange={onChangeProductForm}
                    autoComplete={'off'}
                  />
                </InputWrapper>
                <Button title={'Simpan'} type={'default'} />
              </FormWrapper>
            </ContentSideFormWrapper>
          </SideFormWrapper>
        </>
      );
    case 'schedule':
      return (
        <>
          <SideFormWrapper>
            <SideFormBackground ss={ss} />
            <ContentSideFormWrapper ss={ss} ref={ref}>
              <TitleFormContainer>
                <Text>Tambah Jadwal</Text>
              </TitleFormContainer>
              <FormWrapper onSubmit={addHotelHandler}>
                <InputWrapper>
                  <InputTextForm
                    id={'hotelName'}
                    name={'hotelName'}
                    label={'Nama Hotel'}
                    type={'text'}
                    value={hotelValues.hotelName}
                    placeholder={'Nama Hotel'}
                    onChange={onChangeHotelForm}
                    autoComplete={'off'}
                  />
                </InputWrapper>
                <Button title={'Simpan'} type={'default'} />
              </FormWrapper>
            </ContentSideFormWrapper>
          </SideFormWrapper>
        </>
      );
    default:
      <></>;
  }
}

export default SideForm;
