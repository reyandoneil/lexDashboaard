import { loader } from "../../../Assets";
import { useSelector, useDispatch } from "react-redux";
import { isEditModal } from "../../../Store/Action/GlobalAction";
import { setDataEditProduct } from "../../../Store/Action/ProductAction";
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
  ProductContainerWeb,
  InfoWrapper,
  MobileTitle,
  LoaderWrapper,
  Loader,
} from "./ListElements";
import { reverseData } from "../../../Helper/ReverseData";
import Capital from "../../../Helper/CapitalizeFirstLatter";
import { EditModal, Alert } from "../../Organisms";
import { setIsAlert } from "../../../Store/Action/GlobalAction.js";
import { useState } from "react";

function List({ data }) {
  const dispatch = useDispatch();
  const [id, setId] = useState()
  const reverse = reverseData(data);
  const isLoading = useSelector((state) => state.productReducer.isLoading);
  const isEdit = useSelector((state) => state.globalReducer.isEditModal);
  const ss = useSelector((state) => state.globalReducer.screenSize);
  const isAlert = useSelector((state) => state.globalReducer.isAlert);
  const handleEdit = (dataEdit) => {
    dispatch(isEditModal(true));
    dispatch(setDataEditProduct(dataEdit));
  };
  const handleDelate = (data) => {
    dispatch(setIsAlert(true));
    setId(data)
  };

  return (
    <>
      {isEdit && <EditModal name={"edit product"} />}
      {isAlert && <Alert name={'delateProduct'} data={id}/>}
      <ProductContainer ss={ss}>
        {reverse.map((datum, i) => {
          return (
            <Mobile key={i}>
              <TopMobileContent>
                <StatusHeader type={"mobile"}>
                  {datum?.active ? (
                    <Active>active</Active>
                  ) : (
                    <NonActive>non active</NonActive>
                  )}
                </StatusHeader>
              </TopMobileContent>
              <BottomMobileContent>
                <MobileTitle>Nama Paket</MobileTitle>
                <ProductTitleHeader type={"mobile"}>
                  {Capital(datum.packageName)}
                </ProductTitleHeader>
                <InfoWrapper>
                  <MobileTitle>Quota</MobileTitle>
                  <QuotaHeader type={"mobile"}>{datum.quota}</QuotaHeader>
                  <MobileTitle name={"hari"}>Total Hari</MobileTitle>
                  <TotalDaysHeader type={"mobile"}>
                    {datum.totalDays}
                  </TotalDaysHeader>
                </InfoWrapper>
                <ActionHeader type={"mobile"}>
                  <ActionButton type={"edit"} onClick={() => handleEdit(datum)}>
                    {" "}
                    Edit
                  </ActionButton>
                  <ActionButton
                    type={"delate"}
                    onClick={() => handleDelate(datum.id)}
                  >
                    Delate
                  </ActionButton>
                </ActionHeader>
              </BottomMobileContent>
            </Mobile>
          );
        })}
      </ProductContainer>
      <Web ss={ss}>
        <ListHeader>
          <NumberHeader>No</NumberHeader>
          <ProductTitleHeader>Nama Paket</ProductTitleHeader>
          <QuotaHeader>Total Quota</QuotaHeader>
          <TotalDaysHeader>Total Hari</TotalDaysHeader>
          <StatusHeader>Status Paket</StatusHeader>
          <ActionHeader>Action</ActionHeader>
        </ListHeader>
        
        {isLoading ? (
          <LoaderWrapper>
            <Loader src={loader} />
          </LoaderWrapper>
        ) : (
          <ProductContainerWeb>
            {reverse.map((datum, i) => {
              return (
                <ListWrapper key={datum.id}>
                  <NumberHeader type={"body"}>{i + 1}</NumberHeader>
                  <ProductTitleHeader type={"body"}>
                    {Capital(datum.packageName)}
                  </ProductTitleHeader>
                  <QuotaHeader type={"body"}>{datum.quota}</QuotaHeader>
                  <TotalDaysHeader type={"body"}>
                    {datum.totalDays}
                  </TotalDaysHeader>
                  <StatusHeader type={"body"}>
                    {datum.active ? (
                      <Active>active</Active>
                    ) : (
                      <NonActive>non active</NonActive>
                    )}
                  </StatusHeader>
                  <ActionHeader type={"body"}>
                    <ActionButton
                      type={"edit"}
                      onClick={() => handleEdit(datum)}
                    >
                      Edit
                    </ActionButton>
                    <ActionButton
                      type={"delate"}
                      onClick={() => handleDelate(datum)}
                    >
                      Delate
                    </ActionButton>
                  </ActionHeader>
                </ListWrapper>
              );
            })}
          </ProductContainerWeb>
        )}
      </Web>
    </>
  );
}

export default List;
