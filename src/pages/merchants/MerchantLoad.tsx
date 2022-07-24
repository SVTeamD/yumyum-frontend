import merchantImage from '../../assets/images/merchant.jpeg';
import Load from '../../components/Load';

export default function MerchantLoad() {
  return (
    <Load
      context_new="아직도"
      context_line="가게 등록을 안했슈?"
      context="어서 해봐유!"
      button_context="가게 등록하기"
      link="/merchant/register"
      image={merchantImage}
    ></Load>
  );
}
