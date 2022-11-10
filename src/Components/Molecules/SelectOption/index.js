import {
  Select,
  Option,
  InputTextFormWrapper,
} from "./SelectOptionElements";
import { LabelText } from "../../Atoms";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductByCompanyId } from "../../../Store/Action/ProductAction";

function SelectOption({
  label,
  onChange,
  id,
  name,
  companyId,
}) {
  const dispatch = useDispatch();
  const listPackage = useSelector((state) => state.productReducer.dataProduct);
  useEffect(() => {
    dispatch(getAllProductByCompanyId(companyId));
  }, [companyId, dispatch]);
  switch (name) {
    case "packageTourId":
      return (
        <InputTextFormWrapper>
          <LabelText name={label} />
          <Select id={id} name={name} required onChange={onChange}>
            <Option>Pilih paket</Option>
            {listPackage.map((list, i) => {
              return (
                list.active && (
                  <Option value={list.id} key={i}>
                    {list.packageName}
                  </Option>
                )
              );
            })}
          </Select>
        </InputTextFormWrapper>
      );
    default:
      <></>;
  }
}

export default SelectOption;
