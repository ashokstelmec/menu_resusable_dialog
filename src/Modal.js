import "./App.css";
import React, { useState } from "react";
import Dialog from "./components/Dialog";

function App() {
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState([]);
  const post = ["Home", "About", "Help", "Services"];

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handleOpenModal = (taskk) => {
    onOpenModal();
    setTask(taskk);
  };

  return (
    <div className="App">
      <ul>
        {post.map((el, i) => (
          <li key={i} onClick={() => handleOpenModal(el)}>
            {el}
          </li>
        ))}
      </ul>

      <Dialog open={open} onCloseModal={onCloseModal} singleTask={task} />
    </div>
  );
}

export default App;
