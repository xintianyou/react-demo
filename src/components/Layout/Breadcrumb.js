import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";

//具体导航的名称
const breadcrumbNameMap = {
  "/": "首页",
  "/news": "新闻页",
  "/user/user_info": "用户信息",
  "/user/user_info/user_detail": "用户详情",
  "/user/user_pool": "用户池",
  "/user/user_pool/user_detail": "用户详情",
  "/user/my_user": "我的用户",
  "/user/my_user/user_detail": "用户详情",
};
export default class NewBreadcrumb extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      pathSnippets: null,
      extraBreadcrumbItems: null,
    };
  }
  getPath = () => {
    //对路径进行切分，存放到this.state.pathSnippets中
    // this.state.pathSnippets = this.props.pathname.split('/').filter(i => i);
    this.setState({
      pathSnippets: this.props.pathname.split("/").filter((i) => i),
    });
    // let arr=this.state.pathSnippets;
    // let pathname=this.context.router.history.location.pathname;
    //将切分的路径读出来，形成面包屑，存放到this.state.extraBreadcrumbItems
    // this.state.extraBreadcrumbItems = this.state.pathSnippets.map((_, index) => {
    //     let url = `/${this.state.pathSnippets.slice(0, index + 1).join('/')}`;
    //     return (
    //         <Breadcrumb.Item key={url}>
    //             <Link to={url}>
    //                 {breadcrumbNameMap[url]}
    //             </Link>
    //         </Breadcrumb.Item>
    //     );
    // });
    this.setState({
      extraBreadcrumbItems: this.state.pathSnippets.map((_, index) => {
        let url = `/${this.state.pathSnippets.slice(0, index + 1).join("/")}`;
        return (
          <Breadcrumb.Item key={url}>
            <Link to={url}>{breadcrumbNameMap[url]}</Link>
          </Breadcrumb.Item>
        );
      }),
    });
  };
  componentWillMount() {
    this.getPath();
  }
  render() {
    return <Breadcrumb>{this.state.extraBreadcrumbItems}</Breadcrumb>;
  }
}
