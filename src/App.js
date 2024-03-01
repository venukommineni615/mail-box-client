import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
const router=createBrowserRouter([
  {path:'/',element:<Signup></Signup>}
])
function App() {
  return (

      <RouterProvider router={router}></RouterProvider>
    
  );
}

export default App;
