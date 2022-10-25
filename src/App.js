import Route from './Routes/Route';
import { RouterProvider } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <RouterProvider router={Route}/>
  );
}

export default App;
