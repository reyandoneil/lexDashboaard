import { IS_SCHEDULE_FORM } from "./index";

export const isScheduleForm = (payload) => {
  return {
    type: IS_SCHEDULE_FORM,
    payload,
  };
};
