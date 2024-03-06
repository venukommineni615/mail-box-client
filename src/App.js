import './App.css';
import ComposeMail from './components/ComposeMail';
import Home from './components/Home';
import Login from './components/Login';
import Mails from './components/Mails';
import Mail from './components/Mail'
import Signup from './components/Signup';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
const router=createBrowserRouter([
  {path:'/',element:<Login></Login>},
  {path:'/home',element:<Home></Home>},
  {path:'/signup',element:<Signup></Signup>},
  {path:'/compose',element:<ComposeMail></ComposeMail>},
  {path:'/inbox',element:<Mails></Mails>,
  children:[
    {path:'/inbox/mail/:type/:id',element:<Mail></Mail>}]},
  
])
function App() {
  return (

      <RouterProvider router={router}></RouterProvider>
    
  );
}

export default App;
