import { Game } from '@pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="flex justify-center min-h-screen bg-background p-8 sm:px-1">
      <ToastContainer />
      <Game />
    </div>
  );
}

export default App;
