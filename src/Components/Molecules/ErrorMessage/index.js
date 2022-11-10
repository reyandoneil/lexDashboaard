import {
    ErrorMessageWrapper,
    ErrorIcon,
    Message,
    ErrorIconWrapper,
    MessageWrapper,
    // Title
} from './ErrorMessageElements'
import { errorMessageIcon } from '../../../Assets'
import { useSelector } from 'react-redux'

function ErrorMessage() {
    const msg = useSelector((state) => state?.globalReducer?.message)
    return (
        <ErrorMessageWrapper msgStatus={msg}>
            <ErrorIconWrapper>
                <ErrorIcon src={errorMessageIcon} />
            </ErrorIconWrapper>
            <MessageWrapper>
                {/* <Title>
                    Error
                </Title> */}
                <Message>
                    {msg}
                </Message>
            </MessageWrapper>
        </ErrorMessageWrapper>
    )
}

export default ErrorMessage