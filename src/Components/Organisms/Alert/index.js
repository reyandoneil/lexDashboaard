import {
  AlertWrapper,
  AlertContent,
  AlertBackground,
  AlertTitle,
  AlertTitleWrapper,
  ButtonWrapper,
  ContentWrapper,
  Mb,
} from "./AlertElements";
import { useDispatch } from "react-redux";
import { setIsAlert } from "../../../Store/Action/GlobalAction";
import OutsideHandler from "../../../utils/OutsideHandler";
import Button from "../../Atoms/Button";
import { delateProduct } from "../../../Store/Action/ProductAction";

function Alert({ name, data }) {
  const dispatch = useDispatch();
  const { ref } = OutsideHandler("alert");
  const handleDelateProduct = () => {
    dispatch(delateProduct(data));
  };
  const handleCancelDelateProduct = () => {
    dispatch(setIsAlert(false));
  };
  switch (name) {
    case "delateProduct":
      return (
        <>
          <AlertWrapper>
            <AlertContent ref={ref}>
              <AlertTitleWrapper>
                <AlertTitle>Hapus Produk</AlertTitle>
              </AlertTitleWrapper>
              <ContentWrapper>{data.packageName}</ContentWrapper>
              <ButtonWrapper>
                <Button
                  type={"cancel"}
                  title={"Cancel"}
                  onClick={handleCancelDelateProduct}
                />
                <Mb />
                <Button
                  type={"default"}
                  title={"Ok"}
                  onClick={handleDelateProduct}
                />
              </ButtonWrapper>
            </AlertContent>
            <AlertBackground />
          </AlertWrapper>
        </>
      );

    default:
      break;
  }
}

export default Alert;
