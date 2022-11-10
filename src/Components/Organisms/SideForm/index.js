import {
  SideFormWrapper,
  TitleFormContainer,
  SideFormBackground,
  ContentSideFormWrapper,
  Text,
  InputWrapper,
  FormWrapper,
  FormWrapperSchedule,
  SideFormBackgroundSchedule,
  ScheduleWrapper
} from "./SideFormElements";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../Store/Action/ProductAction";
import { InputTextForm, SelectOption } from "../../Molecules";
import { Button } from "../../Atoms";
import { useState } from "react";
import OutsideHandler from "../../../utils/OutsideHandler";
import Product from "../../../pages/Product";
import { addHotel } from "../../../Store/Action/HotelAction";

function SideForm({ name, ss }) {
  const dispatch = useDispatch();
  const { ref } = OutsideHandler("hotel");

  const [hotelValues, setHotelValues] = useState({
    hotelName: "",
    countryId: 10,
    cityName: "",
    address: "",
    starsRating: "",
    CreatedBy: "1",
  });

  const [ProductValue, setProductValue] = useState({
    companyId: 1,
    packageName: "",
    totalDays: "",
    quota: "",
    active: true,
    userIdCreatedBy: 1,
  });
  const addHotelHandler = (e) => {
    e.preventDefault();
    dispatch(addHotel(hotelValues));
  };

  const addProductHandler = (e) => {
    e.preventDefault();
    dispatch(addProduct(ProductValue));
  };

  const onChangeHotelForm = (e) => {
    const { name, value } = e.target;
    setHotelValues({ ...hotelValues, [name]: value });
  };

  const onChangeProductForm = (e) => {
    const { name, value } = e.target;
    setProductValue({ ...ProductValue, [name]: value });
  };

  switch (name) {
    case "hotel":
      return (
        <>
          <SideFormWrapper>
            <SideFormBackground ss={ss} />
            <ContentSideFormWrapper ss={ss} ref={ref}>
              <TitleFormContainer>
                <Text>Tambah Hotel</Text>
              </TitleFormContainer>
              <FormWrapper onSubmit={addHotelHandler}>
                <InputWrapper>
                  <InputTextForm
                    id={"hotelName"}
                    name={"hotelName"}
                    label={"Nama Hotel"}
                    type={"text"}
                    value={hotelValues.hotelName}
                    placeholder={"Nama Hotel"}
                    onChange={onChangeHotelForm}
                    autoComplete={"off"}
                  />
                  <InputTextForm
                    id={"hotelAddress"}
                    name={"address"}
                    label={"Alamat Hotel"}
                    type={"text"}
                    value={hotelValues.address}
                    placeholder={"Alamat hotel"}
                    onChange={onChangeHotelForm}
                    autoComplete={"off"}
                  />
                  <InputTextForm
                    id={"cityName"}
                    name={"cityName"}
                    label={"Kota"}
                    type={"text"}
                    value={hotelValues.cityName}
                    placeholder={"Nama Kota"}
                    onChange={onChangeHotelForm}
                    autoComplete={"off"}
                  />
                  <SelectOption
                    id={"hotelFacility"}
                    label={"Fasilitas Hotel"}
                    onChange={onChangeHotelForm}
                    name={"starsRating"}
                  />
                </InputWrapper>
                <Button title={"Simpan"} type={"default"} />
              </FormWrapper>
            </ContentSideFormWrapper>
          </SideFormWrapper>
        </>
      );
    case "product":
      return (
        <>
          <SideFormWrapper>
            <SideFormBackground ss={ss} />
            <ContentSideFormWrapper ss={ss} ref={ref}>
              <TitleFormContainer>
                <Text>Tambah Produk</Text>
              </TitleFormContainer>
              <FormWrapper onSubmit={addProductHandler}>
                <InputWrapper>
                  <InputTextForm
                    id={"packageName"}
                    name={"packageName"}
                    label={"Nama Paket"}
                    type={"text"}
                    value={ProductValue.packageName}
                    placeholder={"Nama Paket"}
                    onChange={onChangeProductForm}
                    autoComplete={"off"}
                  />
                  <InputTextForm
                    id={"totalDays"}
                    name={"totalDays"}
                    label={"Jumlah Hari"}
                    type={"number"}
                    value={Product.totalDays}
                    placeholder={"9"}
                    onChange={onChangeProductForm}
                    autoComplete={"off"}
                  />{" "}
                  <InputTextForm
                    id={"quota"}
                    name={"quota"}
                    label={"Quota"}
                    type={"number"}
                    value={Product.quota}
                    placeholder={"45"}
                    onChange={onChangeProductForm}
                    autoComplete={"off"}
                  />
                </InputWrapper>
                <Button title={"Simpan"} type={"default"} />
              </FormWrapper>
            </ContentSideFormWrapper>
          </SideFormWrapper>
        </>
      );
    case "schedule":
      return (
        <>
          <ScheduleWrapper>
            <FormWrapperSchedule ss={ss} ref={ref}>
            </FormWrapperSchedule>
            <SideFormBackgroundSchedule ss={ss} />
          </ScheduleWrapper>
        </>
      );
    default:
      <></>;
  }
}

export default SideForm;
