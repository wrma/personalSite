/*
* @Author: ThinkPad
* @Date:   2017-10-22 15:06:13
* @Last Modified by:   ThinkPad
* @Last Modified time: 2017-10-31 23:04:07
*/
var React = require('react');
var ReactDOM = require('react-dom');
import './index.css';
import {Col,Row} from 'antd';
import {Card} from 'antd';
import EssayCard from '../essay_card/index.js'
import TagCard from '../tag_card/index.js'
import ImageCard from '../image_card/index.js'

export default class Container extends React.Component{
    render(){
        return(
            <div className='wrap'>
                <Row>
                    <Col span={4}></Col>
                    <Col span={16}>
                        <Row>
                            <Col span={16}>
                                <EssayCard></EssayCard>
                                <ImageCard></ImageCard>
                            </Col>
                            <Col span={6} offset={2}>
                                <TagCard></TagCard>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={4}></Col>
                </Row>
            </div>
        );
    }
}