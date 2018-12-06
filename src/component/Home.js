import { Layout, Menu, Icon } from "antd";
import React, { Component } from "react";
import { Route, Redirect, Switch,Link } from "react-router-dom";
import Welcome from "./Welcome";
import Table from "./TablePage";
import './home.css';
const { Header, Sider, Content } = Layout;

export default class Home extends Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout  style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/home/welcome">
                <Icon type="user" />
                <span>Welcome Page</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/home/table">
                <Icon type="video-camera" />
                <span>Table Page</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
            This is a Tittle
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}>
            <div>
              <Switch>
                <Route path="/home/welcome" component={Welcome} />
                <Route path="/home/table" component={Table} />
                <Redirect to="/home/welcome" />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
