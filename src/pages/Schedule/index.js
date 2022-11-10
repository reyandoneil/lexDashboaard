import { Form } from "../../Components/Organisms";
import { TopContent, Content,ListScheduleWrapper, DetailScheduleWrapper } from "./ScheduleElements";
import { Button } from "../../Components/Atoms";
import { useDispatch, useSelector } from "react-redux";
import { isScheduleForm } from "../../Store/Action/ScheduleAction";


function Schedule() {
  const dispatch = useDispatch();
  const isForm = useSelector((state) => state?.scheduleReducer?.isScheduleForm);
  const ss = useSelector((state) => state?.globalReducer?.screenSize);
  const openForm = () => {
    dispatch(isScheduleForm(true));
  };
  return (
    <>
      {isForm && <Form />}
      <TopContent>
        <Button
          type={"add"}
          title={"Tambah Jadwal Pemberangkatan"}
          onClick={openForm}
        />
      </TopContent>
      <Content ss={ss}>
        <ListScheduleWrapper>
          List Schedule
        </ListScheduleWrapper>
        <DetailScheduleWrapper>
          Detail
        </DetailScheduleWrapper>
      </Content>
    </>
  );
}

export default Schedule;
