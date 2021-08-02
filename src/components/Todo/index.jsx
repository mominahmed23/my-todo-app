import React, { useEffect, useState } from "react";

const Todo = () => {
  const [showInput, setshowInput] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editFlag, setEditFlag] = useState(-1);
  const onchangeHandler = (e) => {
    setUserInput(e.target.value);
  };
  const onsaveList = () => {
    if (editFlag !== -1) {
      let temp = [...todoList];
      temp.splice(editFlag, 1, userInput);
      setTodoList(temp);
      setshowInput(false);
      setUserInput("");
      setEditFlag(-1);
    } else {
      let temp = [...todoList];
      temp.push(userInput);
      setTodoList(temp);
      setshowInput(false);
      setUserInput("");
    }
  };
  const addTask = () => {
    setshowInput(true);
  };
  const onDelete = (index) => {
    let temp = [...todoList];
    temp.splice(index, 1);
    setTodoList(temp);
  };
  const onEdit = (index) => {
    setEditFlag(index);
    setshowInput(true);
    setUserInput(todoList[index]);
  };
  useEffect(() => {
    console.log("ran");
  }, []);
  return (
    <div>
      <div>
        <button onClick={addTask}>add task</button>
      </div>
      {showInput && (
        <div className="input-wrap">
          <div>
            <input value={userInput} onChange={onchangeHandler} type="text" />
          </div>
          <div>
            <button
              onClick={() => {
                setshowInput(false);
                setUserInput("");
              }}
            >
              cancel
            </button>
            <button onClick={onsaveList}>save</button>
          </div>
        </div>
      )}
      {todoList.length ? (
        <div>
          <ul>
            {todoList.map((item, index) => (
              <li key={item}>
                {item}
                <button onClick={() => onDelete(index)}>del</button>
                <button onClick={() => onEdit(index)}>edit</button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Todo;
