import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Routes } from './routes';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="flex justify-center min-h-screen bg-background p-8 sm:px-1">
      <BrowserRouter>
        <ToastContainer />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
