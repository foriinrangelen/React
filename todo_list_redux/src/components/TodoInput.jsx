import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
// 명령을 내리기 위한 Action 불러오기
import { TodoReducerActions } from "../redux/reducers/todoSlice";

const TodoInput = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const handleAddBtn = () => {
    let todo = inputRef.current.value;
    dispatch(
      TodoReducerActions.addTodo({ id: uuidv4(), text: todo, complete: false })
    );
    // setTodos([...todos, {id:uuid4(), text:todo, complete: false}])
    // 입력된 내용을 비우고 커서 포커스 조정하기
    inputRef.current.value = "";
    inputRef.current.focus();
  };

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
        onClick={handleAddBtn}
      />
    </div>
  );
};

export default TodoInput;
