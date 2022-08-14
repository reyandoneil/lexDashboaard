import { LargeText, Text } from '../../Atoms';
import PropTypes from 'prop-types';
import { TextWrapper } from './TextContentElements';

function TextContent({ title, text }) {
  return (
    <TextWrapper>
      <LargeText text={title} />
      <Text text={text} />
    </TextWrapper>
  );
}

TextContent.propsTypes = {
  text: PropTypes.string,
};

export default TextContent;
