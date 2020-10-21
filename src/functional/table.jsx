import React from "react";
import Row from "./row";
import data from "./data";
import "../App.css";

const Table = (props) => {
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(data[0]).map((header) => (
            <th>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map((row) => (
          <Row column={row} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
