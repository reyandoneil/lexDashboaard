import { Text } from './LargeTextElements';
import PropTypes from 'prop-types';

function LargeText({ text }) {
  return <Text>{text}</Text>;
}

LargeText.propTypes = {
  text: PropTypes.string,
};

export default LargeText;
