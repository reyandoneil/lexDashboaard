import { Button } from '../../Atoms';

function ListButton() {
  return (
    <>
      <Button type={'list'} title={'Basic Information'} />
      <Button type={'list'} title={'Account Data'} />
      <Button type={'list'} title={'Finance Data'} />
      <Button type={'list'} title={'Password'} />
    </>
  );
}

export default ListButton;
