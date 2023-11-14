import React from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const TodoHome = () => {
  return (
    <div className="todo-container">
      <h1 className="todo-tit">toDo List</h1>
      {/* todo 추가하는 영역 */}
      <TodoInput />

      {/* 해야할 일 출력 */}
      <TodoList title="해야할 일" checked={false} />

      {/* 완료된 일 출력 */}
      <TodoList title="완료된 일" checked={true} />
    </div>
  );
};

export default TodoHome;
