/*
* @Author: ThinkPad
* @Date:   2017-10-25 14:11:55
* @Last Modified by:   wrma
* @Last Modified time: 2017-12-05 17:37:36
*/
var React = require('react');
var ReactDOM = require('react-dom');
import essayCardCss from './index.css';
import {Card,Icon,Tag} from 'antd';

export default class EssayCard extends React.Component{
    render(){    
        return(
            <div>
                <Card className={essayCardCss.card} title={this.props.title} extra={<a href="#">More</a>}>
                    <div className={essayCardCss.content}>
                        {this.props.summary}
                    </div>
                    <div className={essayCardCss.info}>
                        <span>Author：{this.props.author}</span>
                        <span>Date：{this.props.date}</span>
                        <span>阅读量（{this.props.readNum}）</span>
                        <span><Icon type="heart" style={{ fontSize: 12, color: '#666' }} /> 点赞（{this.props.likeNum}）</span>
                    </div>
                </Card>
            </div>
        );
    }
}