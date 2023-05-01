import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AddNewTodo from "./AddNewTodo";
import "./Home.css";
import TodoMenu from "./TodoMenu";

const Home = () => {
  const [reloadTodo, setReloadTodo] = useState(false);
  const [allTodos, setAllTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getAllTodos")
      .then((res) => res.json())
      .then((data) => {
        console.log("Inside useEffect");
        setAllTodos(data);
      });
  }, [reloadTodo]);

  return (
    <div className="border border-2 relative top-36 ">
      <AddNewTodo
        reloadTodo={reloadTodo}
        setReloadTodo={setReloadTodo}
        allTodos={allTodos}
      ></AddNewTodo>
      <TodoMenu></TodoMenu>
      <Outlet
        context={[allTodos, setAllTodos, reloadTodo, setReloadTodo]}
      ></Outlet>
    </div>
  );
};

export default Home;
