import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RootRouter from './routes';

function App() {
  return (
    <BrowserRouter>
      <RootRouter />
    </BrowserRouter>
  );
}

export default App;
