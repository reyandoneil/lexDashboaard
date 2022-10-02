import {
    CardWrapper,
    TopCardWrapper,
    BottomCardWrapper,
    HotelName,
    Star,
    Address
} from './ListCardElements'

function ListCard() {
    return (
        <CardWrapper>
            <TopCardWrapper>

            </TopCardWrapper>
            <BottomCardWrapper>
                <HotelName>
                    Nama Hotel
                </HotelName>
                <Star></Star>
                <Address></Address>
            </BottomCardWrapper>
        </CardWrapper>
    )
}

export default ListCard