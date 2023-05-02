import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home';
import ActiveTodo from "./Pages/Home/Outlets/ActiveTodo.js";
import DoneTodo from "./Pages/Home/Outlets/DoneTodo";
import Todos from "./Pages/Home/Outlets/Todos";
import LoginPage from './Pages/LoginPage/LoginPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage></LoginPage>,
    },
    {
      path: "/register",
      element: <RegisterPage></RegisterPage>,
    },
    {
      path: "/Home",
      element: <Home></Home>,
      children: [
        {
          path: "/Home",
          element: <Todos></Todos>,
        },
        {
          path: "/Home/activeTodo",
          element: <ActiveTodo></ActiveTodo>,
        },
        {
          path: "/Home/doneTodo",
          element: <DoneTodo></DoneTodo>,
        },
      ],
    },
  ]);
  return (
    <div >
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
