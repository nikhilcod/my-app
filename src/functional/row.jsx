import React from "react";

const Row = (props) => {
  return (
    <tr>
      <td>{props.column.Id}</td>
      <td>{props.column.Name}</td>
      <td>{props.column.Department}</td>
      <td>{props.column.Salary}</td>
    </tr>
  );
};

export default Row;
