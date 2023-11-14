import React from "react";
import TodoItem from "./TodoItem";
// import { todos, setTodos } from "./TodoInput";

const TodoList = ({ todos, setTodos, title, checked }) => {
  console.log("^^", todos);
  return (
    <div className="todo-list">
      <p className="todo-list-tit">[{title} 0: 개]</p>
      <ul className="todo-list-ul">
        {todos &&
          todos.map((item) => {
            if (item.complete === checked) {
              return (
                <TodoItem
                  key={item?.id}
                  todo={item}
                  todos={todos}
                  setTodos={setTodos}
                />
              );
            } else return "";
          })}
      </ul>
    </div>
  );
};

export default TodoList;
