import React from "react";

const AddNewTodo = ({ reloadTodo, setReloadTodo, allTodos }) => {
  // console.log(allTodos);

  const onFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const newToDoValue = form.newToDo.value;
    const data = {
      newTodo: `${newToDoValue}`,
    };

    fetch("http://localhost:5000/addNewTodo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReloadTodo(!reloadTodo);
        console.log(reloadTodo);
      });

    // console.log(newToDoValue);
    form.reset();
  };

  // const onInputChange = (event) => {
  //   console.log(event.target.value);
  // };

  return (
    <div className="border border-2 relative left-64 ">
      <form onSubmit={onFormSubmit} className=" ">
        <input
          name="newToDo"
          type="text"
          placeholder="Enter A New Todo..."
          className="border-b-2 rounded-lg input input-warning w-full max-w-xs drop-shadow-md  "
        />
      </form>
    </div>
  );
};

export default AddNewTodo;
