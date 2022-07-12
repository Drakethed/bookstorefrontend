import React from "react";

export default function Book(props) {
  return (
    <div>
      <h2>{props.bookData.name}</h2>
      <h3>{props.bookData.author}</h3>
      <p>{props.bookData.price}</p>
      <h5>{props.bookData.description}</h5>
    </div>
  );
}
