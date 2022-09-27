import {
  SideFormWrapper,
  TitleFormContainer,
  SideFormBackground,
  ContentSideFormWrapper,
  Text,
} from './SideFormElements';
import { InputTextForm } from '../../Molecules';
import { Button } from '../../Atoms';

function SideForm() {
  return (
    <>
      <SideFormWrapper>
        <SideFormBackground />
        <ContentSideFormWrapper>
          <TitleFormContainer>
            <Text>Add Hotel</Text>
          </TitleFormContainer>
          <InputTextForm
            id={'hotelName'}
            name={'hotelName'}
            label={'Hotel Name'}
            type={'text'}
            // value={values.email}
            placeholder={'Hotel Name'}
            // onChange={onChange}
            autoComplete={'off'}
          />
          <InputTextForm
            id={'hotelAddress'}
            name={'hotelAddress'}
            label={'Hotel Address'}
            type={'text'}
            // value={values.email}
            placeholder={'Hotel Address'}
            // onChange={onChange}
            autoComplete={'off'}
          />
          <InputTextForm
            id={'country'}
            name={'country'}
            label={'Country'}
            type={'text'}
            // value={values.email}
            placeholder={'Country'}
            // onChange={onChange}
            autoComplete={'off'}
          />
          <InputTextForm
            id={'Rating'}
            name={'Rating'}
            label={'Rating'}
            type={'text'}
            // value={values.email}
            placeholder={'Rating'}
            // onChange={onChange}
            autoComplete={'off'}
          />
          <Button title={'Login'} type={'default'} />
        </ContentSideFormWrapper>
      </SideFormWrapper>
    </>
  );
}

export default SideForm;
