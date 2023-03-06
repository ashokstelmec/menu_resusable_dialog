import React from "react";

const SingleItem = ({handleOpenModal, item}) => {
  return (
    <li onClick={() => handleOpenModal(item)}>
      {item?.content?.name}
    </li>
  );
};

export default SingleItem;
