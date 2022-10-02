import {
    BasicInformation,
    AccountData,
    FinanceData,
    Password
} from '../'
import {useSelector} from 'react-redux'

function ProfileContent() {
    const name = useSelector((state) => state?.globalReducer?.profileContentName)
    
    switch (name) {
        case 'Basic Information':
            return (
                <BasicInformation />
            )
        case 'Account Data':
            return (
                <AccountData />
            )
        case 'Finance Data':
            return (
                <FinanceData />
            )
        case 'Password':
            return (
                <Password />
            )


        default:
            return <></>
    }
}

export default ProfileContent