/*
* @Author: ThinkPad
* @Date:   2017-11-03 19:05:44
* @Last Modified by:   wrma
* @Last Modified time: 2017-12-14 16:44:09
*/
var React = require('react');
var ReactDOM = require('react-dom');
import headerSimpleCss from './index.css';
import {Col,Row} from 'antd';
import { Menu, Icon } from 'antd';
import { Link} from 'react-router'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export default class HeaderSimple extends React.Component{
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
            <div className={headerSimpleCss.head}>
                <Row>
                    <Col span={3}></Col>
                    <Col span={18} className={headerSimpleCss.title}>
                        <div className={headerSimpleCss.logo}>WRMA</div>
                        <div>
                            <Menu
                            // onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                            className={headerSimpleCss.nav}
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
                    <Col span={3}></Col>
                </Row>
            </div>
        );
    }
}