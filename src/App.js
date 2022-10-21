
import './App.css';
import UserContext from './Context/UserContext';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Route';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
     <UserContext>
      <RouterProvider router={routes}/>
     </UserContext>
     <ToastContainer />
    </div>
  );
}

export default App;
