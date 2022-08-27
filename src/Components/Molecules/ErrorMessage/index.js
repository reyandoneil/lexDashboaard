import {
    ErrorMessageWrapper,
    ErrorIcon,
    Message,
    ErrorIconWrapper,
    MessageWrapper,
    // Title
} from './ErrorMessageElements'
import { errorMessageIcon } from '../../../Assets'

function ErrorMessage() {
    return (
        <ErrorMessageWrapper>
            <ErrorIconWrapper>
                <ErrorIcon src={errorMessageIcon} />
            </ErrorIconWrapper>
            <MessageWrapper>
                {/* <Title>
                    Error
                </Title> */}
                <Message>
                    this is error message
                </Message>
            </MessageWrapper>
        </ErrorMessageWrapper>
    )
}

export default ErrorMessage