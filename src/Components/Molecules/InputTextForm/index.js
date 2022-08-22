import PropTypes from 'prop-types';
import { InputText, LabelText } from '../../Atoms';
import { InputTextFormWrapper } from './InputTextFormElements';

function InputTextForm({
  name,
  type,
  placeholder,
  onChange,
  label,
  id,
  autoComplete,
}) {
  return (
    <InputTextFormWrapper>
      <LabelText name={label} />
      <InputText
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        id={id}
        autoComplete={autoComplete}
      />
    </InputTextFormWrapper>
  );
}

InputTextForm.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
};

export default InputTextForm;
