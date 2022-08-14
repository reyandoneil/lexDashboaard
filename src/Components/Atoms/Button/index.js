import { ButtonWrapper, ButtonTitle, Icon } from './ButtonElements';

function Button({ title, type, src }) {
  switch (type) {
    case 'default':
      return (
        <ButtonWrapper>
          <ButtonTitle>{title}</ButtonTitle>
        </ButtonWrapper>
      );
    case 'icon':
      return (
        <ButtonWrapper title={title}>
          <Icon src={src} />
          <ButtonTitle title={title}>{title}</ButtonTitle>
        </ButtonWrapper>
      );
    default:
      <></>;
  }
}

export default Button;
