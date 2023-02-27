// eslint-disable-next-line
import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./Layout.css";

// as: 取别名
// eslint-disable-next-line
import {
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch,
  withRouter,
} from "react-router-dom";
import routes from "../../router";
// eslint-disable-next-line
import NewBreadcrumb from "./Breadcrumb";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Layouts extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  componentWillMount = () => {
    console.log("componentWillMount");
  };

  componentDidMount = () => {
    console.log("componentDidMount");
    console.log(this.props);
    // this.props.history.listen(location => {
    //   // 最新路由的 location 对象，可以通过比较 pathname 是否相同来判断路由的变化情况
    //   if (this.props.location.pathname !== location.pathname) {
    //     // 路由发生了变化
    //     console.log('路由变化了');
    //   }
    // })
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["2"]} mode="inline">
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                <Link to="/">Home页面</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
                <Link to="/game">Game页面</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<DesktopOutlined />}>
                <Link to="/news">News页面</Link>
              </Menu.Item>
              <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                <Menu.Item key="4">Tom</Menu.Item>
                <Menu.Item key="5">Bill</Menu.Item>
                <Menu.Item key="6">Alex</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                <Menu.Item key="7">
                  <Link to="/product">product</Link>
                </Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9" icon={<FileOutlined />}>
                Files
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: "0 16px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              {/*<NewBreadcrumb pathname={GetPathname}/>*/}
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                {routes.map((item, idx) => {
                  if (item.exact) {
                    return (
                      <Route
                        key={idx}
                        exact
                        path={item.path}
                        component={item.component}
                      ></Route>
                    );
                  } else {
                    return (
                      <Route
                        key={idx}
                        path={item.path}
                        component={item.component}
                      ></Route>
                    );
                  }
                })}
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default Layouts;
