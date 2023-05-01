import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import TodoCard from "./TodoCard";

const ActiveTodo = () => {
  const [activeTodos, setActiveTodo] = useState([]);
  const [allTodos, setAllTodos, reloadTodo, setReloadTodo] =
    useOutletContext();

  useEffect(() => {
    fetch("http://localhost:5000/activeTodos")
      .then((res) => res.json())
      .then((data) => {
        console.log("Inside useEffect");
        setActiveTodo(data);
      });
  }, [reloadTodo]);

  const toggleTodoDone = (id) => {
    console.log("toggled");
    fetch(`http://localhost:5000/getAllTodos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let prevTodos = [...allTodos];

        allTodos.forEach((prevtodo, index) => {
          if (prevtodo._id === id) {
            return prevTodos.splice(index, 1, data);
          }
        });

        setAllTodos(prevTodos);
        setReloadTodo(!reloadTodo);
        console.log(prevTodos);
        console.log(allTodos);
      });
  };

  return (
    <div className=" mt-6 relative left-64">
      <div className="flex flex-col">
        {activeTodos?.map((todo, index) => (
          <TodoCard
            key={index}
            todo={todo}
            toggleTodoDone={toggleTodoDone}
            reloadTodo={reloadTodo}
            setReloadTodo={setReloadTodo}
          ></TodoCard>
        ))}
      </div>
    </div>
  );
};

export default ActiveTodo;
