import React from "react";
import "./Container.scss";

export default function Container(props) {
  const { image, name, position, admin } = props;

  return (
    <div className="container">
      <img src={image} />
      <h3>{name}</h3>
      <p>{position}</p>
      <div className="container__admin">{admin}</div>
    </div>
  );
}
