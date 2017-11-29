/*
* @Author: ThinkPad
* @Date:   2017-11-04 10:58:03
* @Last Modified by:   ThinkPad
* @Last Modified time: 2017-11-07 17:10:35
*/
var React = require('react');
var ReactDOM = require('react-dom');
import {Col,Row} from 'antd';
import HeaderSimple from 'components/header_simple/index.js'
import Footer from 'components/footer/index.js'
import EssayDetail from 'components/essay_detail/index.js'
import Comment from 'components/comment_list/index.js'
import PostComment from 'components/post_comment/index.js'
import styles from './index.css';

export default class About extends React.Component{
    render(){
        return(
            <div>
                <HeaderSimple></HeaderSimple>
                <Row className={styles.wrap}>
                    <Col span={14} offset={5}>
                        <EssayDetail></EssayDetail>
                        <Comment></Comment>
                        <PostComment></PostComment>
                    </Col>
                </Row>
                <Footer></Footer>
            </div>
        );
    }
}