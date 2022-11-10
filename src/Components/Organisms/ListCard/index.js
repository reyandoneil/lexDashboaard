import {
    CardWrapper,
    TopCardWrapper,
    BottomCardWrapper,
    HotelName,
    Star,
    Address,
    Img
} from './ListCardElements'
import {hotel1} from '../../../Assets'

function ListCard() {
    return (
        <CardWrapper>
            <TopCardWrapper>
                <Img src={hotel1} alt={'imgHotel'}/>
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