import MultipleSelect from '../components/MultipleSelect';
import TextBox from '../components/TextBox';

export default function MakeStore() {
  return (
    <div>
      <TextBox
        button_context="가게등록하고 싶으면 눌러봐유"
        link="/MakeStore/TakePhoto"
      ></TextBox>
      <MultipleSelect></MultipleSelect>
    </div>
  );
}
