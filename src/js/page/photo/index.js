/*
* @Author: wrma
* @Date:   2017-11-29 22:34:03
* @Last Modified by:   wrma
* @Last Modified time: 2017-11-29 23:13:46
*/
var React = require('react');
var ReactDOM = require('react-dom');
import {Col,Row} from 'antd';
import HeaderSimple from 'components/header_simple/index.js'
import Footer from 'components/footer/index.js'
import WaterFall from 'components/waterfall/index.js'

export default class Photo extends React.Component{
    render(){
        return(
            <div>
                <HeaderSimple></HeaderSimple>
                <Row>
                    <Col span={18} offset={3}>
                        
                    </Col>
                </Row>
                <Footer></Footer>
            </div>
        );
    }
}