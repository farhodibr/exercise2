import { useState } from "react";

export default function Button (props) {

  const { config, className, onClick, children } = props;

  return (
    <button className={`btn ${className}`} {...config} onClick={onClick} >{children}</button>
  );

}