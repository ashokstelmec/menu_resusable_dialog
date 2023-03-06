import "./App.css";
import React, { useState } from "react";
import Dialog from "./components/Dialog";
import SingleItem from "./components/SingleItem";
import Home from "./components/dialogContent/Home";
import About from "./components/dialogContent/About";
import Help from "./components/dialogContent/Help";
import Services from "./components/dialogContent/Services";

function App() {
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState({});
  const items = [
    {
      content: Home,
    },
    {
      content: About,
    },
    {
      content: Help,
    },
    {
      content: Services,
    },
  ];

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handleOpenModal = (taskk) => {
    onOpenModal();
    setTask(taskk);
  };

  return (
    <div className="App">
      <ul>
        {items.map((el, i) => (
          <SingleItem key={i} handleOpenModal={handleOpenModal} item={el} />
        ))}
      </ul>

      <Dialog open={open} onCloseModal={onCloseModal} content={task} />
    </div>
  );
}

export default App;
