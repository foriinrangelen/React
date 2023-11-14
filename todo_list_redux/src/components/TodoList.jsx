import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = ({ title, checked }) => {
  const todos = useSelector((state) => state.todo.todos);

  console.log("^^", todos);
  return (
    <div className="todo-list">
      <p className="todo-list-tit">[{title} 0: 개]</p>
      <ul className="todo-list-ul">
        {todos &&
          todos.map((item) => {
            if (item.complete === checked) {
              return <TodoItem key={item?.id} todo={item} />;
            } else return "";
          })}
      </ul>
    </div>
  );
};

export default TodoList;
