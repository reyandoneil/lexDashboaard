import PropTypes from 'prop-types';
import {
  ButtonWrapper,
  ButtonTitle,
  Icon,
  ListButtonWrapper,
} from './ButtonElements';
import { loader } from '../../../Assets';
import { useSelector } from 'react-redux';

function Button({ title, type, src }) {
  const isLoading = useSelector(
    (state) => state?.globalReducer?.isLoading
  );
  switch (type) {
    case 'default':
      return (
        <ButtonWrapper>
          <ButtonTitle>{title}</ButtonTitle>
          {isLoading && <Icon src={loader} name={'default'} />}
        </ButtonWrapper>
      );
    case 'icon':
      return (
        <ButtonWrapper title={title}>
          <Icon src={src} />
          <ButtonTitle title={title}>{title}</ButtonTitle>
        </ButtonWrapper>
      );
    case 'list':
      return (
        <ListButtonWrapper>
          <ButtonTitle title={title}>{title}</ButtonTitle>
        </ListButtonWrapper>
      );
    default:
      <></>;
  }
}
Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  src: PropTypes.string,
};

export default Button;
