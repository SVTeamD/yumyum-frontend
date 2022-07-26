import MultipleSelect from '../components/MultipleSelect';
import TextBox from '../components/TextBox';

export default function Example() {
  return (
    <div>
      <TextBox
        button_context="가게등록하고 싶으면 눌러봐유"
        link="/Example/UploadPhoto"
      ></TextBox>
      <MultipleSelect></MultipleSelect>
    </div>
  );
}
