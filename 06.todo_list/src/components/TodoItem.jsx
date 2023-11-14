import React, { useState } from "react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

const TodoItem = ({ todo, todos, setTodos }) => {
  const handleCheckChange = () => {
    // map함수로 객체나 배열을 리턴하려면 {}밖에 ()소괄호를 써준다
    // {} 안에 ...item 시 item 객체의 프로퍼티들이 들어간다
    // 이후 complete의 프로퍼티에 바로 접근해서 값을 바꿔준다
    // 만약 complete에 바로 접근하려면 ()를 빼준다
    // let updateList = todos.map((item) => ({
    //   //   ...item,
    //   //   complete: item.id === todo.id ? !item.complete : item.complete,
    //   // item.complete
    // }));
    let updateList = todos.map((item) => ({
      ...item,
      complete: item.id === todo.id ? !item.complete : item.complete,
      //   item.complete = !item.complete;
      //   console.log(item.complete);
    }));
    console.log(todo.complete);
    setTodos(updateList);
  };

  //   const handleCheckChange1 = () => {
  //     todo["completed"] = !todo["completed"];
  //     console.log(todo);
  //   };

  //   const handleCheckChange2 = () => {
  //     todo.complete = !todo.complete;
  //     console.log(todo);
  //   };

  // 내가만든 삭제ㅜㅜ
  // const allRight26 = () => {
  //   console.log(todo.id);
  //   // console.log("223232", todos.indexOf(todo));
  //   let newTodos = [...todos];
  //   newTodos.splice(newTodos.indexOf(todo), 1);
  //   setTodos(newTodos);
  // };

  //   const allRight26 = () => {
  //     todos.splice(todos.indexOf(todo), 1);
  //     setTodos(todos);
  //   };
  // 수정버튼 클릭시 수정모드로 변경
  const handleEditChange = () => {
    setedited(!edited);
    console.log(edited);
    if (edited === true) {
      let updateList = todos.map((item) => ({
        ...item,
        text: item.id === todo.id ? newText : item.text,
      }));
      setTodos(updateList);
    }
  };
  // 사용자가 입력한 값을 newText에 저장
  // const handleEditText = (e) => {
  //   setNewText(e.target.value);
  //   console.log(e.target.value);
  //   console.log("123", newText);
  //   todo.text = e.target.value;
  // };

  // !edited로
  // const handleSubmit = () => {};
  // edited: 사용자가 수정버튼을 눌렀는지에 대한 상태
  // true: 수정 false: 삭제
  // 사용자가 입력한 텍스트를 저장
  const [newText, setNewText] = useState(todo.text);
  // const [newBtn, setNewBtn] = useState(todo.text);
  const [edited, setedited] = useState(false);

  const handDelete = (id) => {
    if (window.confirm("정말 삭제하시겠습니까?"))
      console.log("삭제할 todo의 id: ", id);
    let updateList = todos.filter((item) => item.id !== id);
    setTodos(updateList);
  };
  return (
    <div>
      <li className="todo-item">
        {todo.complete ? (
          <FaCheckCircle
            style={{ color: "green" }}
            className="todo-item-checkbox"
            onClick={handleCheckChange}
          />
        ) : (
          <FaRegCircle
            style={{ color: "lightgray" }}
            className="todo-item-checkbox"
            onClick={handleCheckChange}
          />
        )}

        <span
          className={`todo-item-content ${
            todo.complete ? "todo-item-content-checked" : ""
          }`}
        >
          {edited ? (
            <input
              type="text"
              className="todo-item-edit-input"
              onChange={(e) => setNewText(e.target.value)}
              value={newText}
            />
          ) : (
            <span className="todo-item-content">{todo.text}</span>
          )}
        </span>
        {todo.complete ? (
          ""
        ) : edited ? (
          <button className="todo-item-submit-btn" onClick={handleEditChange}>
            ✅
          </button>
        ) : (
          <button className="todo-item-edit-btn" onClick={handleEditChange}>
            ✏️
          </button>
        )}

        <button
          className="todo-item-delete-btn"
          onClick={() => handDelete(todo.id)}
        >
          🗑️
        </button>
      </li>
    </div>
  );
};

export default TodoItem;
//   const allRight26 = () => {
//     const updatedTodos = [...todos]; // 새로운 배열을 생성하고 todos 배열 복사
//     updatedTodos.splice(updatedTodos.indexOf(todo), 1); // 요소 삭제
//     setTodos(updatedTodos); // 업데이트된 배열을 상태로 설정
//   };
