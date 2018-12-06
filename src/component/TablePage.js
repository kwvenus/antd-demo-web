import React, { Component } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street"
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street"
  },
  {
    key: "3",
    name: "John",
    age: 42,
    address: "10 Downing Street"
  },
  {
    key: "4",
    name: "John",
    age: 42,
    address: "10 Downing Street"
  },
  {
    key: "5",
    name: "John",
    age: 42,
    address: "10 Downing Street"
  },
  {
    key: "6",
    name: "John",
    age: 42,
    address: "10 Downing Street"
  }
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => (
      <Link to="/home/welcome">
        <span>link to welcome</span>
      </Link>
    )
  }
];

class TablePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p
          style={{
            textAlign: "center",
            marginTop: "1rem",
            color: "#1890ff",
            fontSize: "1rem"
          }}>
          Welcome to our Table
        </p>

        <Table dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}

export default TablePage;
