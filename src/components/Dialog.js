import React, { useState, useEffect } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const Dialog = ({ open, onCloseModal, singleTask }) => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    setTask(singleTask);
  }, [singleTask]);

  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      classNames={{
        modal: "customModal",
      }}
      center
    >
      <h1>{task.title}</h1>
      <h2>{task.about}</h2>
      <p>{task.description}</p>
    </Modal>
  );
};

export default Dialog;
