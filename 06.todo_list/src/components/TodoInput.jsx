import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
const TodoInput = ({ todos, setTodos }) => {
  let inputRef = useRef();
  const allRight24 = () => {
    // const randomIdGenerator = () => {
    //   return "_" + Math.random().toString(36).substring(2, 11);
    // };
    let todo = inputRef.current.value;
    console.log(inputRef.current.value);
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        text: todo,
        complete: false,
      },
    ]);
    // 입력된 내용을 비우고 커서 포커스 조정하기
    inputRef.current.value = "";
    inputRef.current.focus();
  };
  console.log(todos);
  return (
    <div className="todo-inputbox">
      <input
        type="text"
        className="todo-inputbox-input"
        ref={inputRef}
        placeholder="할 일을 입력해주세요"
      />
      <input
        type="button"
        className="todo-inputbox-add-btn"
        value="등록"
        onClick={allRight24}
      />
    </div>
  );
};

export default TodoInput;
