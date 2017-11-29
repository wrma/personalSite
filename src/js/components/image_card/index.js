/*
* @Author: ThinkPad
* @Date:   2017-10-30 14:53:09
* @Last Modified by:   ThinkPad
* @Last Modified time: 2017-11-03 21:14:10
*/
var React = require('react');
var ReactDOM = require('react-dom');
import ImageCardCss from './index.css';
import {Card,Icon} from 'antd';

export default class ImageCard extends React.Component{
    render(){
        return(
            <div>
                <div className={ImageCardCss.card}>
                    <div className={ImageCardCss.card_content}>
                       <div className={ImageCardCss.image}>
                            <img src="http://via.placeholder.com/200x150"></img>
                       </div>
                       <div className={ImageCardCss.desc}>
                            <div className={ImageCardCss.desc_title}>标题</div>
                            <div className={ImageCardCss.desc_content}>
                                如果你无法简洁的表达你的想法，那只说明你还不够了解它。
                                -- 阿尔伯特·爱因斯坦
                            </div>
                       </div>
                    </div>
                    <div className={ImageCardCss.card_info}>
                        <span>Athor：wrma</span>
                        <span>Date：20170923</span>
                        <span>阅读量（233）</span>
                        <span><Icon type="heart" style={{ fontSize: 12, color: '#666' }} /> 点赞（12）</span>
                    </div>
                </div>
            </div>
        );
    }
}