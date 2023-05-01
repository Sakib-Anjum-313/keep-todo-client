import React, { useState } from "react";
import { Link } from "react-router-dom";

const TodoMenu = () => {
  const [allTodoActive, setAllTodoActive] = useState(true);
  const [activeTodo, setActiveTodo] = useState(false);
  const [doneTodo, setDoneTodo] = useState(false);

  return (
    <div className=" mt-4 relative left-64 ">
      <h1>05 pending Todos...</h1>
      <div className=" mt-4">
        <Link
          onClick={() => {
            setAllTodoActive(true);
            setActiveTodo(false);
            setDoneTodo(false);
          }}
          to={"/Home"}
        >
          <button
            className={
              allTodoActive
                ? "btn-active btn btn-sm  rounded-md btn-outline btn-info"
                : "btn btn-sm  rounded-md btn-outline btn-info "
            }
          >
            All Todos
          </button>
        </Link>

        <Link
          onClick={() => {
            setAllTodoActive(false);
            setActiveTodo(true);
            setDoneTodo(false);
          }}
          to={"/Home/activeTodo"}
        >
          <button
            className={
              activeTodo
                ? "btn-active btn btn-sm ml-1 rounded-md btn-outline btn-warning"
                : " btn btn-sm ml-1 rounded-md btn-outline btn-warning"
            }
          >
            Active Todos
          </button>
        </Link>
        <Link
          onClick={() => {
            setAllTodoActive(false);
            setActiveTodo(false);
            setDoneTodo(true);
          }}
          to={"/Home/doneTodo"}
        >
          <button
            className={
              doneTodo
                ? "btn-active btn btn-sm ml-1 rounded-md btn-outline btn-success"
                : "btn btn-sm ml-1 rounded-md btn-outline btn-success"
            }
          >
            Done Todos
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TodoMenu;
