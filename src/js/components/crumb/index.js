/*
* @Author: ThinkPad
* @Date:   2017-10-31 15:05:12
* @Last Modified by:   ThinkPad
* @Last Modified time: 2017-10-31 22:23:10
*/
var React = require('react');
var ReactDOM = require('react-dom');
import './index.css';
import {Row,Col,Breadcrumb} from 'antd';

export default class Crumb extends React.Component{
    render(){
        return(
            <div>
                <Row>
                    <Col span={16} offset={4}>
                        <Breadcrumb className='crumb_wrap'>
                            <Breadcrumb.Item className='crumb_item'><a href="">技术分享</a></Breadcrumb.Item>
                            <Breadcrumb.Item className='crumb_item'><a href="">游记</a></Breadcrumb.Item>
                            <Breadcrumb.Item className='crumb_item'><a href="">杂感</a></Breadcrumb.Item>
                            <Breadcrumb.Item className='crumb_item'><a href="">影评</a></Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
            </div>
        );
    }
}