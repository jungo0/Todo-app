import styled from 'styled-components';
import { BsStarHalf } from 'react-icons/bs';
import Form from '../../utilComponent/Form';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import Dding from '../../utilComponent/Explanation';

const DoneContainerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1.5rem;
  background-color: #436850;
  padding: 2rem;
  color: white;

  @media (min-width: 640px) {
    height: 640px;
    width: 640px;
    border-radius: 0;
    border-bottom-right-radius: 2rem;
    border-top-right-radius: 2rem;
  }
`;

const DoneContainer = () => {
  const todo = useSelector((state: RootState) => state.todos);
  const doneCounter = todo.filter((todo) => todo.checked).length;

  return (
    <DoneContainerWrapper>
      <Dding />
      <BsStarHalf style={{ flexShrink: 0, fontSize: '80px' }} />
      <div style={{ fontSize: '41px', marginBottom: '12px', padding: '2px', fontWeight: 'bold' }}>
        {doneCounter}
      </div>
      <Form />
    </DoneContainerWrapper>
  );
};

export default DoneContainer;
