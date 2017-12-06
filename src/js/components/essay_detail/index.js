/*
* @Author: ThinkPad
* @Date:   2017-11-04 11:09:17
* @Last Modified by:   wrma
* @Last Modified time: 2017-12-06 20:51:14
*/
var React = require('react');
var ReactDOM = require('react-dom');
import Styles from './index.css';
import {Icon,Tag} from 'antd';

export default class EssayDetail extends React.Component{
    render(){
        return(
            <div className={Styles.wrap}>
                <div className={Styles.title_wrap}>
                    <h1 className={Styles.title}>{this.props.title}</h1>
                    <div className={Styles.tags}>
                        {
                            this.props.tags.map((item,index)=>{
                               return <Tag key={index}>{item.tagName}</Tag> 
                            })
                        }    
                    </div>
                </div>
                <div className={Styles.info_wrap}>
                        <span><Icon type="calendar" />{this.props.date}</span>
                        <span><Icon type="book" />阅读量（{this.props.readNum}）</span>
                        <span><Icon type="message" />评论（{this.props.commentNum}）</span>
                        <span><Icon type="message" />喜欢（{this.props.likeNum}）</span>
                    </div>
                <div className={Styles.content_wrap}>
                    <div className={Styles.content}>{this.props.content}</div>
                </div>
                <div className={Styles.share_wrap}>
                    <div className={Styles.like}>
                        <span>有用</span>
                        <Icon type="like-o" />
                    </div>
                    <div className={Styles.share}>
                        <Icon type="share-alt" />分享到：QQ WeChat
                    </div>
                </div>
            </div>
        );
    }
}