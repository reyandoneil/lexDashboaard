import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { isScheduleForm } from "../../Store/Action/ScheduleAction";
import { setProfileMenu } from "../../Store/Action/UserAction";
import { setIsAddHotel } from "../../Store/Action/HotelAction";
import { isEditModal, setIsAlert } from "../../Store/Action/GlobalAction";
export default function OutsideHandler(name) {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    if (ref?.current?.contains(e?.target)) {
      // inside click
      return;
    }
    switch (name) {
      case "profile":
        dispatch(setProfileMenu(false));
        break;
      case "hotel":
        dispatch(setIsAddHotel(false));
        break;
      case "editModal":
        dispatch(isEditModal(false));
        break;
      case "alert":
        dispatch(setIsAlert(false));
        break;
      case "scheduleForm":
        dispatch(isScheduleForm(false));
        break;
      default:
        break;
    }
    // outside click
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });

  return { ref };
}
