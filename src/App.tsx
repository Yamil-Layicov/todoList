import Board from './components/Board';
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {

  return (
    <div className="todoList">
      <h1>Kanban Board</h1>
      <Board />
      <Toaster />
    </div>
  );
};

export default App;
