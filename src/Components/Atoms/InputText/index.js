import { InputTexts } from './InputTextElements';
import PropTypes from 'prop-types';
function TextInput({
  type,
  placeholder,
  name,
  onChange,
  value,
  errorMessage,
  pattern,
  autoComplete,
  id,
  defaultValue,
  maxlength,
  min,
  ...inputProps
}) {
  return (
    <>
      <InputTexts
        {...inputProps}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        id={name}
        name={name}
        value={value}
        pattern={pattern}
        defaultValue={defaultValue}
        maxlength={maxlength}
        autoComplete={autoComplete}
        required
        min={min}
      />
    </>
  );
}

TextInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
  errorMessage: PropTypes.string,
  pattern: PropTypes.string,
  autoComplete: PropTypes.any,
  id: PropTypes.any,
  defaultValue: PropTypes.any,
  maxlength: PropTypes.number,
  required: PropTypes.bool,
};

export default TextInput;
