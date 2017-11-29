/*
* @Author: ThinkPad
* @Date:   2017-11-06 22:06:59
* @Last Modified by:   ThinkPad
* @Last Modified time: 2017-11-07 14:06:13
*/
var React = require('react');
var ReactDOM = require('react-dom');
import Styles from './index.css';
import {Icon,Tag} from 'antd';

export default class Comment extends React.Component{
    render(){
        return(
            <div className={Styles.wrap}>
                <div className={Styles.title}>评论列表：</div>
                <div className={Styles.item}>
                    <div className={Styles.comment}>
                        <div className={Styles.info}>
                            <span>#1楼</span>
                            <span>2017.9.24</span>
                            <span>11.22</span>
                            <span><Icon type="user" />wrma</span>
                        </div>
                        <div className={Styles.content}>
                            如果你无法简洁的表达你的想法，那只说明你还不够了解它。
                            -- 阿尔伯特·爱因斯坦
                        </div>
                        <div className={Styles.vote}>
                            <span>支持（7）</span>
                            <span>反对（3）</span>
                            <span>回复（6）</span>
                        </div>
                    </div>
                    <div className={Styles.response_list}>
                        <div className={Styles.response}>
                            <div className={Styles.name}>
                                deamon&nbsp;回复&nbsp;wrma
                            </div>
                            <div className={Styles.content}>
                                如果你无法简洁的表达你的想法，那只说明你还不够了解它。
                                -- 阿尔伯特·爱因斯坦
                            </div>
                            <div className={Styles.info}>
                                <span>#1楼</span>
                                <span>2017.9.24</span>
                                <span>11.22</span>
                                <span><Icon type="user" />wrma</span>
                            </div>
                        </div>
                        <div className={Styles.more}><a>查看更多>></a></div>
                    </div>
                </div>
                <div className={Styles.more}><a>查看更多>></a></div>
            </div>
        );
    }
}