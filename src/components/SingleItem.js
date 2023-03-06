import React from "react";

const SingleItem = ({handleOpenModal, item}) => {
  return (
    <li onClick={() => handleOpenModal(item)}>
      {item.title}
    </li>
  );
};

export default SingleItem;
