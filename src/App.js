import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css';
import Header from "./Pages/Header/Header";
import Home from './Pages/Home/Home';
import LoginPage from './Pages/LoginPage/LoginPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<LoginPage></LoginPage>
    },
    {
      path: "/register",
      element: <RegisterPage></RegisterPage>
    },
    {
      path: "/Home",
      element: <Home></Home>
    }
  ])
  return (
    <div >
      <Header></Header>
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
