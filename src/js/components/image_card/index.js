/*
* @Author: ThinkPad
* @Date:   2017-10-30 14:53:09
* @Last Modified by:   wrma
* @Last Modified time: 2017-12-05 17:40:16
*/
var React = require('react');
var ReactDOM = require('react-dom');
import ImageCardCss from './index.css';
import {Card,Icon,Tag} from 'antd';

export default class ImageCard extends React.Component{
    render(){
        return(
            <div>
                <div className={ImageCardCss.card}>
                    <div className={ImageCardCss.card_content}>
                       <div className={ImageCardCss.image}>
                            <img src={this.props.image}></img>
                       </div>
                       <div className={ImageCardCss.desc}>
                            <div className={ImageCardCss.desc_title}>
                                <span>{this.props.title}</span>
                                <span className={ImageCardCss.tag}><Tag>css</Tag><Tag>java</Tag></span>
                            </div>
                            <div className={ImageCardCss.desc_content}>
                                {this.props.summary}
                            </div>
                       </div>
                    </div>
                    <div className={ImageCardCss.card_info}>
                        <span>Author：{this.props.author}</span>
                        <span>Date：{this.props.date}</span>
                        <span>阅读量（{this.props.readNum}）</span>
                        <span><Icon type="heart" style={{ fontSize: 12, color: '#666' }} /> 点赞（{this.props.likeNum}）</span>
                    </div>
                </div>
            </div>
        );
    }
}