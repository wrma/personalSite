/*
* @Author: ThinkPad
* @Date:   2017-10-22 10:52:30
* @Last Modified by:   ThinkPad
* @Last Modified time: 2017-10-22 14:46:58
*/
var React = require('react');
var ReactDOM = require('react-dom');
import './index.css';
import {Col,Row} from 'antd';
import { Menu, Icon } from 'antd';
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
            <div className='head'>
                <Row>
                    <Col span={3}></Col>
                    <Col span={18} className='title'>
                        <div className='logo'>WRMA</div>
                    </Col>
                    <Col span={3}></Col>
                </Row>
                <Row>
                    <Col span={16}></Col>
                    <Col span={6}>
                        <div>
                            <Menu
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                            className='nav'
                            >
                            <Menu.Item key="index">
                              <a href="#" >首页</a>
                            </Menu.Item>
                            <SubMenu title={<span><a href="#" >分享</a></span>}>
                                <Menu.Item key="setting:1">JAVA</Menu.Item>
                                <Menu.Item key="setting:2">前端</Menu.Item>
                                <Menu.Item key="setting:3">杂感</Menu.Item>
                                <Menu.Item key="setting:4">游记</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="photo">
                              <a href="#" >照片墙</a>
                            </Menu.Item>
                            <Menu.Item key="aboutMe">
                              <a href="#" >关于我们</a>
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