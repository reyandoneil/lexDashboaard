import {
  SideFormWrapper,
  TitleFormContainer,
  SideFormBackground,
  ContentSideFormWrapper,
  Text,
  InputWrapper,
  FormWrapper,
} from './SideFormElements';
import { InputTextForm } from '../../Molecules';
import { Button } from '../../Atoms';
import { useState } from 'react';
import OutsideHandler from '../../../utils/OutsideHandler';

function SideForm({ name, ss }) {
  const { ref } = OutsideHandler('hotel');
  const [hotelValues, setHotelValues] = useState({
    hotelName: '',
    hotelAddress: '',
    country: '',
    rating: '',
  });
  const addHotelHandler = (e) => {};

  const onChangeHotelForm = (e) => {
    const { name, value } = e.target;
    setHotelValues({ ...hotelValues, [name]: value });
  };
  console.log(hotelValues);
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
