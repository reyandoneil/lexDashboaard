import {
  InputText,
  LabelText,
  CheckBoxWrapper
} from './CheckBoxElements'

function CheckBox({
  id,
  name,
  label,
  type,
  defaultChecked,
  checked,
  onChange
  }) {
  return (
    <CheckBoxWrapper>
      <InputText
        type={type}
        id={id}
        name={name}
        label={label}
        defaultChecked={defaultChecked}
        checked={checked}
        onChange={onChange}
      />
      <LabelText>{ label}</LabelText>
    </CheckBoxWrapper>
  )
}

export default CheckBox