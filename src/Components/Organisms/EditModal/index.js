import { useDispatch, useSelector } from "react-redux";
import { isEditModal } from "../../../Store/Action/GlobalAction";
import { editProduct } from "../../../Store/Action/ProductAction";
import {
  ModalBackground,
  ModalContent,
  ModalWrapper,
  ModalTitle,
  EditForm,
  InputWrapper,
} from "./ModalElements";
import OutsideHandler from "../../../utils/OutsideHandler";
import { InputTextForm, CheckBox } from "../../Molecules";
import { Button } from "../../Atoms";
import { useState } from "react";

function Modal({ name }) {
  const dispatch = useDispatch();
  const dataEdit = useSelector((state) => state.productReducer.dataEdit);
  const { ref } = OutsideHandler("editModal");
  //MELIHAT PERUBAHAN PADA FORM
  const [isChange, setIsChange] = useState(false);
  //SET DEFAULT EDIT VALUE
  const [editValue, setEditValue] = useState({
    id: dataEdit.id,
    companyId: dataEdit.companyId,
    packageName: dataEdit.packageName,
    totalDays: dataEdit.totalDays,
    quota: dataEdit.quota,
    active: dataEdit.active,
    userIdCreatedBy: dataEdit.userIdCreatedBy,
  });

  const onChangeProductForm = (e) => {
    setIsChange(true);
    const { name, value } = e.target;
    setEditValue({ ...editValue, [name]: value });
  };

  const onChangeCheckBox = (e) => {
    setIsChange(true);
    const { name, checked } = e.target;
    setEditValue({ ...editValue, [name]: checked });
  };

  const handleCancel = () => {
    dispatch(isEditModal(false));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (isChange) {
      dispatch(editProduct(editValue));
    } else {
      dispatch(isEditModal(false));
    }
  };

  switch (name) {
    case "edit product":
      return (
        <>
          <ModalWrapper>
            <ModalContent ref={ref}>
              <ModalTitle>Edit Product</ModalTitle>
              <EditForm>
                <InputWrapper>
                  <InputTextForm
                    id={"packageName"}
                    name={"packageName"}
                    label={"Nama Paket"}
                    type={"text"}
                    value={editValue?.packageName}
                    placeholder={"Nama Paket"}
                    onChange={onChangeProductForm}
                    autoComplete={"off"}
                  />
                  <InputTextForm
                    id={"totalDays"}
                    name={"totalDays"}
                    label={"Jumlah Hari"}
                    type={"number"}
                    value={editValue?.totalDays}
                    placeholder={"9"}
                    onChange={onChangeProductForm}
                    autoComplete={"off"}
                  />
                  <InputTextForm
                    id={"quota"}
                    name={"quota"}
                    label={"Quota"}
                    type={"number"}
                    value={editValue?.quota}
                    placeholder={"45"}
                    onChange={onChangeProductForm}
                    autoComplete={"off"}
                  />
                  <CheckBox
                    id={"active"}
                    name={"active"}
                    label={"Aktifkan produk umrah ?"}
                    type={"checkbox"}
                    defaultChecked={editValue.active}
                    onChange={onChangeCheckBox}
                  />
                </InputWrapper>
                <Button
                  title={"Simpan"}
                  type={"default"}
                  is
                  onClick={handleEditSubmit}
                />
              </EditForm>
              <Button title={"Cancel"} type={"cancel"} onClick={handleCancel} />
            </ModalContent>
            <ModalBackground />
          </ModalWrapper>
        </>
      );
    default:
      <></>;
  }
}

export default Modal;
