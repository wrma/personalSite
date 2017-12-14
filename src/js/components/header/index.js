/*
* @Author: ThinkPad
* @Date:   2017-10-22 10:52:30
* @Last Modified by:   wrma
* @Last Modified time: 2017-12-14 16:43:54
*/
var React = require('react');
var ReactDOM = require('react-dom');
import headerCss from './index.css';
import {Col,Row} from 'antd';
import { Menu, Icon } from 'antd';
import { Link} from 'react-router'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export default class Header extends React.Component{
    constructor(){
        super();
        this.state = {
        current: 'index',
      }
    };
    handleClick(e){
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
    };
    render(){

        return(
            <div className={headerCss.head}>
                <Row>
                    <Col span={3}></Col>
                    <Col span={18} className={headerCss.title}>
                        <div className={headerCss.logo}>WRMA</div>
                    </Col>
                    <Col span={3}></Col>
                </Row>
                <Row>
                    <Col span={16}></Col>
                    <Col span={6}>
                        <div>
                            <Menu
                            // onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                            className={headerCss.nav}
                            >
                            <Menu.Item key="index">
                              <Link to="/">首页</Link>
                            </Menu.Item>
                            <SubMenu title={<span><Link to="/share">分享</Link></span>}>
                                <Menu.Item key="setting:1">JAVA</Menu.Item>
                                <Menu.Item key="setting:2">前端</Menu.Item>
                                <Menu.Item key="setting:3">杂感</Menu.Item>
                                <Menu.Item key="setting:4">游记</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="photo">
                              <a href="#" >照片墙</a>
                            </Menu.Item>
                            <Menu.Item key="aboutMe">
                              <Link to="/about">关于我们</Link>
                            </Menu.Item>
                            <Menu.Item key="management">
                              <a href="#" >管理</a>
                            </Menu.Item>
                          </Menu>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    }
}