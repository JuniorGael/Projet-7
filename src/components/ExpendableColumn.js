import React from "react";
import useOpenExpendable from "./useOpenExpendable";
import "../styles/components/ExpendableColumn.css";

const ExpendableColumn = ({ title, text }) => {
  const { isOpen, toggle } = useOpenExpendable();

  return (
    <div className="container">
      <div className="accordionBlock" onClick={toggle}>
        <div className="column-text">{title}</div>
        <button className="expendable-button">
          <span
            className="material-symbols-outlined"
            style={{
              transform: `rotate(${isOpen ? 180 : 0}deg)`,
              transition: "all 0.25s",
              fontSize: "30px",
              paddingTop: "3px",
            }}
          >
            expand_more
          </span>
        </button>
      </div>
      <div className="text-container">
        {isOpen && <div className="text">{text}</div>}
      </div>
    </div>
  );
};

export default ExpendableColumn;
