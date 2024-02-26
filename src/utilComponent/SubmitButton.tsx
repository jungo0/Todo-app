import { FaCheckCircle } from 'react-icons/fa';
import ClassName from '../type/className';

const SubmitButton = ({ className }: ClassName) => {
  return (
    <button className={className}>
      <FaCheckCircle className=" text-6xl" />
    </button>
  );
};

export default SubmitButton;
