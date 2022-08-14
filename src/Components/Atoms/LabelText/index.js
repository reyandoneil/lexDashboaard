import { LabelTextTitle } from './LabelText';
import PropTypes from 'prop-types';

function LabelText({ name }) {
  return (
    <>
      <LabelTextTitle>{name}</LabelTextTitle>
    </>
  );
}

LabelText.propTypes = {
  name: PropTypes.string,
};

export default LabelText;
