/*
* @Author: ThinkPad
* @Date:   2017-11-04 11:09:17
* @Last Modified by:   ThinkPad
* @Last Modified time: 2017-11-06 22:08:13
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
                    <h1 className={Styles.title}>标题</h1>
                    <div className={Styles.tags}>
                        <Tag>CSS</Tag><Tag>CSS3</Tag>
                    </div>
                </div>
                <div className={Styles.info_wrap}>
                        <span><Icon type="calendar" />2017-11-04</span>
                        <span><Icon type="book" />阅读量（233）</span>
                        <span><Icon type="message" />评论（6）</span>
                    </div>
                <div className={Styles.content_wrap}>
                    <div className={Styles.content}></div>
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