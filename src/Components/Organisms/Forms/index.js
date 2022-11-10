import {
  FormWrapper,
  ContentForm,
  FormBackground,
  ContentTitle,
  Title,
  InputFormWrapper,
  Left,
  Right,
  Line,
  SuggestWrapper,
  TextSuggest,
  ButtonWrapper,
  Space,
} from "./FormElements";
import { Button } from "../../Atoms";
import { InputTextForm, SelectOption } from "../../Molecules";
import OutsideHandler from "../../../utils/OutsideHandler";
import { useDispatch, useSelector } from "react-redux";
import { getAirlines } from "../../../Store/Action/GlobalAction";
import { useState } from "react";
import { isScheduleForm } from "../../../Store/Action/ScheduleAction";

export default function Form() {
  const { ref } = OutsideHandler("scheduleForm");

  const [isSuggest, setIsSuggest] = useState(false);

  const ss = useSelector((state) => state.globalReducer.screenSize)

  const [isSuggestArrival, setIsSuggestArrival] = useState(false);

  const dispatch = useDispatch();

  const closeForm = () => {
    dispatch(isScheduleForm(false));
  };

  const listAirlines = useSelector((state) => state.globalReducer.airlines);

  const [data, setData] = useState({
    airlinesDepartureId: "",
    airlinesArrivalId: "",
  });

  const [dataSchedule, setDataSchedule] = useState({
    packageTourId: 0,
    companyId: 0,
    etdToDestination: "",
    atdToDestination: "",
    etaToDestination: "",
    ataToDestination: "",
    etdToOrigin: "",
    atdToOrigin: "",
    etaToOrigin: "",
    ataToOrigin: "",
    departureOriginAirportId: 0,
    departureDestinationAirportId: 0,
    returnOriginAirportId: 0,
    returnDestinationAirportId: 0,
    active: true,
    tourLeaderName: "",
    tourLeaderContactNo: "",
    muthawif1: "",
    muthawif2: "",
    iteneraryId: 0,
    hotelMekkahId: 0,
    hotelMadinahId: 0,
    airlinesDepartureId: 0,
    airlinesArrivalId: 0,
    userIdCreatedBy: 0,
    departureFlightNo: "string",
    returnFlightNo: "string",
  });

  const companyId = 1;

  const onChangeAirlines = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    if (value.length >= 3) {
      setIsSuggest(true);
      dispatch(getAirlines(value, 1));
    } else if (value.length === 0) {
      setIsSuggest(false);
    }
  };

  const onChangeAirlinesArrival = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    if (value.length >= 3) {
      setIsSuggestArrival(true);
      dispatch(getAirlines(value, 1));
    } else if (value.length === 0) {
      setIsSuggestArrival(false);
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setDataSchedule({ ...dataSchedule, [name]: value });
  };

  const airlineHandleClick = (id, name) => {
    setData({ ...data, airlinesDepartureId: name });
    setDataSchedule({ ...dataSchedule, airlinesDepartureId: id });
    setIsSuggest(false);
  };

  const airlineArrivalHandleClick = (id, name) => {
    setData({ ...data, airlinesArrivalId: name });
    setDataSchedule({ ...dataSchedule, airlinesArrivalId: id });
    setIsSuggestArrival(false);
  };

  const Suggest = () => {
    return (
      <SuggestWrapper>
        {listAirlines.map((item) => {
          return (
            <TextSuggest
              key={item.id}
              onClick={() => airlineHandleClick(item.id, item.airlineName)}
            >
              {item.airlineName}
            </TextSuggest>
          );
        })}
      </SuggestWrapper>
    );
  };

  const SuggestArrival = () => {
    return (
      <SuggestWrapper>
        {listAirlines.map((item) => {
          return (
            <TextSuggest
              key={item.id}
              onClick={() =>
                airlineArrivalHandleClick(item.id, item.airlineName)
              }
            >
              {item.airlineName}
            </TextSuggest>
          );
        })}
      </SuggestWrapper>
    );
  };

  return (
    <FormWrapper>
      <ContentForm ss={ss} ref={ref}>
        <ContentTitle>
          <Title> Tambah Jadwal Keberangkatan</Title>
        </ContentTitle>
        <InputFormWrapper ss={ss}>
          <Right ss={ss}>
            <SelectOption
              label={"Nama Paket"}
              id={"packageTourId"}
              name={"packageTourId"}
              companyId={companyId}
              onChange={onChange}
            />
            <InputTextForm
              id={"depatureDate"}
              name={"depatureDate"}
              label={"Tanggal Keberangkatan"}
              type={"date"}
              // value={data.pa}
              onChange={onChange}
              autoComplete={"off"}
            />
            <InputTextForm
              id={"embarkation"}
              name={"embarkation"}
              label={"Embarkasi"}
              type={"text"}
              //   value={hotelValues.hotelName}
              placeholder={"Jakarta"}
              onChange={onChange}
              autoComplete={"off"}
            />
            <InputTextForm
              id={"airlinesDepartureId"}
              name={"airlinesDepartureId"}
              label={"Airlines Departure"}
              type={"text"}
              value={data.airlinesDepartureId}
              placeholder={"Garuda Indonesia "}
              onChange={onChangeAirlines}
              autoComplete={"off"}
            />
            {isSuggest && Suggest()}
            <InputTextForm
              id={"departureFlightNo"}
              name={"departureFlightNo"}
              label={"Nomor Penerbangan"}
              type={"text"}
              //   value={hotelValues.hotelName}
              placeholder={"GT-123 "}
              onChange={onChange}
              autoComplete={"off"}
            />
            <InputTextForm
              id={"airlinesArrivalId"}
              name={"airlinesArrivalId"}
              label={"Airlines Arrival"}
              type={"text"}
              value={data.airlinesArrivalId}
              placeholder={"Garuda Indonesia "}
              onChange={onChangeAirlinesArrival}
              autoComplete={"off"}
            />
            {isSuggestArrival && SuggestArrival()}
            <InputTextForm
              id={"flightNumber"}
              name={"flightNumber"}
              label={"Nomor Penerbangan"}
              type={"text"}
              //   value={hotelValues.hotelName}
              placeholder={"GT-123 "}
              //   onChange={onChangeHotelForm}
              autoComplete={"off"}
            />
          </Right>
          <Line />
          <Left ss={ss}>
            <InputTextForm
              id={"hotelMekkahId"}
              name={"hotelMekkahId"}
              label={"Nama Hotel di Makkah"}
              type={"text"}
              //   value={hotelValues.hotelName}
              placeholder={"Nama Hotel"}
              //   onChange={onChangeHotelForm}
              autoComplete={"off"}
            />
            <InputTextForm
              id={"hotelMadinahId"}
              name={"hotelMadinahId"}
              label={"Nama Hotel di Maddinah"}
              type={"text"}
              //   value={hotelValues.hotelName}
              placeholder={"Nama Hotel"}
              //   onChange={onChangeHotelForm}
              autoComplete={"off"}
            />
            <InputTextForm
              id={"tourLeaderName"}
              name={"tourLeaderName"}
              label={"Nama Tour Leader"}
              type={"text"}
              // value={data.tourLeaderName}
              placeholder={"Abdul jamal"}
              onChange={onChange}
              autoComplete={"off"}
            />
            <InputTextForm
              id={"tourLeaderContactNo"}
              name={"tourLeaderContactNo"}
              label={"No. Telepon Tour Leader"}
              type={"number"}
              //   value={hotelValues.hotelName}
              placeholder={"08324823232434"}
              onChange={onChange}
              autoComplete={"off"}
            />
            <InputTextForm
              id={"muthawif1"}
              name={"muthawif1"}
              label={"Nama Muthawif 1"}
              type={"text"}
              //   value={hotelValues.hotelName}
              placeholder={"Bambang"}
              onChange={onChange}
              autoComplete={"off"}
            />
            <InputTextForm
              id={"muthawif2"}
              name={"muthawif2"}
              label={"Nama Muthawif 2"}
              type={"text"}
              //   value={hotelValues.hotelName}
              placeholder={"Budiman"}
              onChange={onChange}
              autoComplete={"off"}
            />
            <ButtonWrapper>
              <Button type={"cancel"} title={"Cancel"} onClick={closeForm} />
              <Space />
              <Button type={"default"} title={"Simpan"} />
            </ButtonWrapper>
          </Left>
        </InputFormWrapper>
      </ContentForm>
      <FormBackground />
    </FormWrapper>
  );
}
