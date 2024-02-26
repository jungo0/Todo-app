import './App.css';
import AllContainer from './components/AllContainer';
import BackGround from './components/BackGround';
import ModeButton from './utilComponent/ModeButton';
import DoneContainer from './components/DoneComponents/DoneContainer';
import TodoListContainer from './components/TodoComponents/TodoListContainer';

const App = () => {
  return (
    <>
      <BackGround>
        <AllContainer>
          <>
            <ModeButton />
            <TodoListContainer />
            <DoneContainer />
          </>
        </AllContainer>
      </BackGround>
    </>
  );
};

export default App;
