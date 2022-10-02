import {
    ListWrapper,
    ListHeader,
    NumberHeader,
    ProductTitleHeader,
    QuotaHeader,
    StatusHeader,
    ActionHeader,
    TotalDaysHeader,
    Mobile,
    Web,
    Active,
    NonActive,
    TopMobileContent,
    BottomMobileContent,
    ActionButton,
    ProductContainer,
    InfoWrapper,
    MobileTitle
} from './ListElements'
import { reverseData } from '../../../Helper/ReverseData'
import Capital from '../../../Helper/CapitalizeFirstLatter'
import { useSelector } from 'react-redux'


function List({ data }) {
    const reverse = reverseData(data)
    const ss = useSelector((state) => state.globalReducer.screenSize)
    return (
        <>
            <ProductContainer ss={ss} r>
                {reverse.map((datum, i) => {
                    return (
                        <Mobile key={i} >
                            <TopMobileContent>
                                <StatusHeader type={'mobile'}>{
                                    datum.active ? <Active>active</Active> : <NonActive>non active</NonActive>
                                }</StatusHeader>
                            </TopMobileContent>
                            <BottomMobileContent>
                                <MobileTitle>
                                    Nama Paket
                                </MobileTitle>
                                <ProductTitleHeader type={'mobile'}>{Capital(datum.packageName)}</ProductTitleHeader>
                                <InfoWrapper>
                                    <MobileTitle>
                                        Quota
                                    </MobileTitle>
                                    <QuotaHeader type={'mobile'}>{datum.quota}</QuotaHeader>
                                    <MobileTitle name={'hari'}>
                                        Total Hari
                                    </MobileTitle>
                                    <TotalDaysHeader type={'mobile'}>{datum.totalDays}</TotalDaysHeader>
                                </InfoWrapper>
                                <ActionHeader type={'mobile'}>
                                    <ActionButton type={'edit'} > Edit</ActionButton >
                                    <ActionButton type={'delate'} >Delate</ActionButton>
                                </ActionHeader>
                            </BottomMobileContent>
                        </Mobile>
                    )
                })}
            </ProductContainer>
            <Web ss={ss}>
                <ListHeader>
                    <NumberHeader>No</NumberHeader>
                    <ProductTitleHeader>Nama Paket</ProductTitleHeader>
                    <QuotaHeader>Total Quota</QuotaHeader>
                    <TotalDaysHeader>Total Hari</TotalDaysHeader>
                    <StatusHeader>
                        Status Paket
                    </StatusHeader>
                    <ActionHeader>
                        Action
                    </ActionHeader>
                </ListHeader>
                {
                    reverse.map((datum, i) => {
                        return (
                            <ListWrapper key={i}>
                                <NumberHeader type={'body'}>{i + 1}</NumberHeader>
                                <ProductTitleHeader type={'body'}>{Capital(datum.packageName)}</ProductTitleHeader>
                                <QuotaHeader type={'body'}>{datum.quota}</QuotaHeader>
                                <TotalDaysHeader type={'body'}>{datum.totalDays}</TotalDaysHeader>
                                <StatusHeader type={'body'}>{
                                    datum.active ? <Active>active</Active> : <NonActive>non active</NonActive>
                                }</StatusHeader>
                                <ActionHeader type={'body'}>
                                    <ActionButton type={'edit'} > Edit</ActionButton >
                                    <ActionButton type={'delate'} >Delate</ActionButton>
                                </ActionHeader>
                            </ListWrapper>
                        )
                    })
                }
            </Web>
        </>
    )
}

export default List