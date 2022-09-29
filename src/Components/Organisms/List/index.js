import {
    ListWrapper,
    Number,
    ProductTitle,
    Quota,
    TotalDays,
    Status
} from './ListElements'

function List({ data }) {
    return (
        <>
            {
                data.map((datum, i) => {
                    return (
                        <ListWrapper key={i}>
                            <Number>{i + 1}</Number>
                            <ProductTitle>{datum.packageName}</ProductTitle>
                            <Quota>{datum.quota}</Quota>
                            <TotalDays>{datum.totalDays}</TotalDays>
                            <Status>{
                                datum.active ? <div>active</div> : <div>non active</div>
                            }</Status>
                        </ListWrapper>
                    )
                })
            }
        </>
    )
}

export default List