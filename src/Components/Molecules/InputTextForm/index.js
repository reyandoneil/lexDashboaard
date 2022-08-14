import { InputText, LabelText } from '../../Atoms';
import { InputTextFormWrapper } from './InputTextFormElements';

function InputTextForm({ name }) {
  return (
    <InputTextFormWrapper>
      <LabelText name={name} type={name} />
      <InputText />
    </InputTextFormWrapper>
  );
}

export default InputTextForm;
