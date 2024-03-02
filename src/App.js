import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
const router=createBrowserRouter([
  {path:'/',element:<Login></Login>},
  {path:'/home',element:<Home></Home>},
  {path:'/signup',element:<Signup></Signup>}
])
function App() {
  return (

      <RouterProvider router={router}></RouterProvider>
    
  );
}

export default App;
