import { useState } from 'react';
import { Profile } from '../';
import { InputTextForm } from '../../Molecules';
import { Button } from '../../Atoms';
import {
  BasicInformationWrapper,
  FormWrapper,
  BasicInformationContainer,
} from './BasicInformationElements';

function BasicInformation() {
  const [basicInformationFormValue, setBasicInformationFormValue] =
    useState();
  return (
    <>
      <BasicInformationContainer>
        <BasicInformationWrapper>
          <Profile />
        </BasicInformationWrapper>
        <FormWrapper>
          <InputTextForm
            id={'namaPenjamin'}
            name={'namaPenjamin'}
            label={'Nama Penjamin'}
            type={'namaPenjamin'}
            value={basicInformationFormValue}
            placeholder={'Nama Penjamin'}
            // onChange={onChange}
            autoComplete={'off'}
          />
          <InputTextForm
            id={'email'}
            name={'email'}
            label={'User email'}
            type={'email'}
            value={basicInformationFormValue}
            placeholder={'User email'}
            // onChange={onChange}
            autoComplete={'off'}
          />
          <InputTextForm
            id={'phoneNumber'}
            name={'phoneNumber'}
            label={'Phone Number'}
            type={'number'}
            value={basicInformationFormValue}
            placeholder={'081236564658'}
            // onChange={onChange}
            autoComplete={'off'}
          />
          <InputTextForm
            id={'tempatLahir'}
            name={'tempatLahir'}
            label={'Tempat Lahir'}
            type={'text'}
            value={basicInformationFormValue}
            placeholder={'UserEmail@mail.com'}
            // onChange={onChange}
            autoComplete={'off'}
          />
          <InputTextForm
            id={'tanggalLahir'}
            name={'tanggalLahir'}
            label={'Tanggal Lahir'}
            type={'date'}
            value={basicInformationFormValue}
            placeholder={'User email'}
            // onChange={onChange}
            autoComplete={'off'}
          />
          <InputTextForm
            id={'alamatLengkap'}
            name={'alamatLengkap'}
            label={'Alamat Lengkap'}
            type={'text'}
            value={basicInformationFormValue}
            placeholder={'Jl. Embun Pagi No.12'}
            // onChange={onChange}
            autoComplete={'off'}
          />
          <InputTextForm
            id={'provinsi'}
            name={'provinsi'}
            label={'Provinsi'}
            type={'text'}
            value={basicInformationFormValue}
            placeholder={'Riau'}
            // onChange={onChange}
            autoComplete={'off'}
          />
          <InputTextForm
            id={'kabupatenKota'}
            name={'kabupatenKota'}
            label={'Kota/Kabupaten'}
            type={'text'}
            value={basicInformationFormValue}
            placeholder={'Pekanbaru'}
            // onChange={onChange}
            autoComplete={'off'}
          />
          <Button title={'Simpan'} type={'default'} />
        </FormWrapper>
      </BasicInformationContainer>
    </>
  );
}

export default BasicInformation;
