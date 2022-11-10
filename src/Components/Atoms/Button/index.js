import PropTypes from 'prop-types';
import {
  ButtonWrapper,
  ButtonTitle,
  Icon,
  ListButtonWrapper,
  ButtonAddWrapper,
  ButtonCancelWrapper
} from './ButtonElements';

import { loader } from '../../../Assets';
import { useSelector } from 'react-redux';

function Button({ title, type, src, isActive, onClick, id }) {
  const isLoading = useSelector(
    (state) => state?.globalReducer?.isLoading
  );
  switch (type) {
    case 'add':
      return (
        <ButtonAddWrapper onClick={onClick} disabled={isLoading}>
          <ButtonTitle>{title}</ButtonTitle>
          {/* {isLoading && <Icon src={loader} name={'default'} />} */}
        </ButtonAddWrapper>
      );
    case 'default':
      return (
        <ButtonWrapper disabled={isLoading} onClick={onClick}>
          <ButtonTitle>{title}</ButtonTitle>
          {isLoading && <Icon src={loader} name={'default'} />}
        </ButtonWrapper>
      );
    case 'cancel':
      return (
        <ButtonCancelWrapper disabled={isLoading} onClick={onClick}>
          <ButtonTitle>{title}</ButtonTitle>
            {isLoading && <Icon src={loader} name={'default'} />}
          </ButtonCancelWrapper>
      );
    case 'icon':
      return (
        <ButtonWrapper title={title}>
          <Icon src={src} />
          <ButtonTitle title={title}>{title}</ButtonTitle>
        </ButtonWrapper>
      );
    case 'action':
      return (
        <ButtonWrapper title={title}>
          <Icon src={src} />
          {/* <ButtonTitle title={title}>{title}</ButtonTitle> */}
        </ButtonWrapper>
      );
    case 'list':
      return (
        <ListButtonWrapper isActive={isActive} onClick={onClick}>
          <ButtonTitle isActive={isActive} title={title}>
            {title}
          </ButtonTitle>
        </ListButtonWrapper>
      );
    default:
      return <></>;
  }
}
Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  src: PropTypes.string,
};

export default Button;
