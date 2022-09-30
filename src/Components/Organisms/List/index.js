import {
    ListWrapper,
    ListHeader,
    NumberHeader,
    ProductTitleHeader,
    QuotaHeader,
    StatusHeader,
    ActionHeader,
    TotalDaysHeader
} from './ListElements'

function List({ data }) {
    return (
        <>
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
                data.map((datum, i) => {
                    return (
                        <ListWrapper key={i}>
                            <NumberHeader type={'body'}>{i + 1}</NumberHeader>
                            <ProductTitleHeader type={'body'}>{datum.packageName}</ProductTitleHeader>
                            <QuotaHeader type={'body'}>{datum.quota}</QuotaHeader>
                            <TotalDaysHeader type={'body'}>{datum.totalDays}</TotalDaysHeader>
                            <StatusHeader type={'body'}>{
                                datum.active ? <div>active</div> : <div>non active</div>
                            }</StatusHeader>
                            <ActionHeader type={'body'}>
                                action
                            </ActionHeader>

                        </ListWrapper>
                    )
                })
            }
        </>
    )
}

export default List