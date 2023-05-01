import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AddNewTodo from "./AddNewTodo";
import "./Home.css";
import TodoMenu from "./TodoMenu";

const Home = () => {
  const [reloadTodo, setReloadTodo] = useState(false);
  const [pendingTodos, setPendingTodos] = useState(0);
  const [allTodos, setAllTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getAllTodos")
      .then((res) => res.json())
      .then((data) => {
        console.log("Inside useEffect");
        setAllTodos(data);
        const pendingItems = data.filter((item) => item.done === false);
        console.log(pendingItems);
        setPendingTodos(pendingItems.length);

      });
  }, [reloadTodo]);

  return (
    <div className="border border-2 relative top-36 ">
      <AddNewTodo
        reloadTodo={reloadTodo}
        setReloadTodo={setReloadTodo}
        allTodos={allTodos}
      ></AddNewTodo>
      <TodoMenu pendingTodos={pendingTodos}></TodoMenu>
      <Outlet
        context={[
          allTodos,
          setAllTodos,
          reloadTodo,
          setReloadTodo,
          setPendingTodos,
        ]}
      ></Outlet>
    </div>
  );
};

export default Home;
