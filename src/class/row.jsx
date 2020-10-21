import React from "react";

class Row extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.column.Id}</td>
        <td>{this.props.column.Name}</td>
        <td>{this.props.column.Department}</td>
        <td>{this.props.column.Salary}</td>
      </tr>
    );
  }
}

export default Row;
