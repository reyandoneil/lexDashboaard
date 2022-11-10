import { useState } from "react";
import { Button } from "../../Atoms";
import { profileContentName } from "../../../Store/Action/GlobalAction";
import { useDispatch } from "react-redux";

function ListButton() {
  const dispatch = useDispatch();
  const dataListButton = [
    {
      id: 1,
      type: "list",
      title: "Basic Information",
    },
    {
      id: 2,
      type: "list",
      title: "Account Data",
    },
    {
      id: 3,
      type: "list",
      title: "Finance Data",
    },
    {
      id: 4,
      type: "list",
      title: "Password",
    },
  ];
  const [isActive, setIsActive] = useState("null");
  const onClick = (e) => {
    console.error(e)
    setIsActive(e.target.title);
    dispatch(profileContentName(e.target.title));
  };
  return (
    <>
      {dataListButton.map((element, i) => {
        return (
          <Button
            key={element.title}
            type={element.type}
            title={element.title}
            isActive={isActive === element.title ? "active" : null}
            onClick={onClick}
            id={i}
          />
        );
      })}
    </>
  );
}

export default ListButton;
