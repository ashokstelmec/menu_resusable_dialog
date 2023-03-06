import React, { useState, useEffect  } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const Dialog = ({ open, onCloseModal, content: Content }) => {
  const [task, setTask] = useState({content: null});

  useEffect(() => {
    setTask({content: Content && <Content />});
  }, [Content]);
  console.log("Task", task);

  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      classNames={{
        modal: "customModal",
      }}
      center
    >
      {task.content}
    </Modal>
  );
};

export default Dialog;
