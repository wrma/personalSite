/*
* @Author: ThinkPad
* @Date:   2017-10-22 15:06:13
* @Last Modified by:   wrma
* @Last Modified time: 2017-12-05 16:02:56
*/
var React = require('react');
var ReactDOM = require('react-dom');
import containerCss from './index.css';
import {Col,Row} from 'antd';
import {Card} from 'antd';
import EssayCard from '../essay_card/index.js'
import TagCard from '../tag_card/index.js'
import ImageCard from '../image_card/index.js'

export default class Container extends React.Component{
    constructor(){
        super();
        this.state = {
            list : ''
        }
    };
    render(){
        return(
            <div className={containerCss.wrap}>
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