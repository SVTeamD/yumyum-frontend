import customerImage from '../../assets/images/customer.jpeg';
import Load from '../../components/Load';

export default function CustomerLoad() {
  return (
    <Load
      context_new="새로오신 손님이유?"
      context_line="어서 한번"
      context="둘러봐유!"
      button_context="가게 둘러보기"
      link="/stores"
      image={customerImage}
    ></Load>
  );
}
