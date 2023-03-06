import "./App.css";
import React, { useState } from "react";
import Dialog from "./components/Dialog";
import SingleItem from "./components/SingleItem";

function App() {
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState([]);
  const items = [
    {
      title: "Home",
      about: "You have reached home.",
      description:
        "Home is the Best places to live and rest in the entire world. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    },
    {
      title: "About",
      about: "What is this About?",
      description:
        "About is to tell any individual about its existence. Anyone can explain anything.",
    },
    {
      title: "Help",
      about: "Why do I need Help?",
      description:
        "I need help because i have to grow in life and learn in life the things that i never knew and I need a lots of money also.",
    },
    {
      title: "Services",
      about: "What services do I provide!",
      description:
        "I provide web designing and web development services. I also provide personalize coaching services.",
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

      <Dialog open={open} onCloseModal={onCloseModal} singleTask={task} />
    </div>
  );
}

export default App;
