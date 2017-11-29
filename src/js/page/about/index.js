/*
* @Author: ThinkPad
* @Date:   2017-11-03 11:35:11
* @Last Modified by:   ThinkPad
* @Last Modified time: 2017-11-07 14:26:40
*/
var React = require('react');
var ReactDOM = require('react-dom');
import {Col,Row} from 'antd';
import HeaderSimple from 'components/header_simple/index.js'
import AboutMe from 'components/about_me/index.js'
import aboutCss from './index.css';
import Footer from 'components/footer/index.js'

export default class About extends React.Component{
    render(){
        return(
            <div>
                <HeaderSimple></HeaderSimple>
                <Row className={aboutCss.wrap}>
                    <Col className={aboutCss.content} span={14} offset={5}>
                        <AboutMe></AboutMe>
                        <AboutMe></AboutMe>
                    </Col>
                </Row>
                <Footer></Footer>
            </div>
        );
    }
}