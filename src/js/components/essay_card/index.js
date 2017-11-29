/*
* @Author: ThinkPad
* @Date:   2017-10-25 14:11:55
* @Last Modified by:   ThinkPad
* @Last Modified time: 2017-11-03 21:09:08
*/
var React = require('react');
var ReactDOM = require('react-dom');
import essayCardCss from './index.css';
import {Card,Icon} from 'antd';

export default class EssayCard extends React.Component{
    render(){
        return(
            <div>
                <Card className={essayCardCss.card} title="标题" extra={<a href="#">More</a>}>
                    <div className={essayCardCss.content}>
                        如果你无法简洁的表达你的想法，那只说明你还不够了解它。
                        -- 阿尔伯特·爱因斯坦
                    </div>
                    <div className={essayCardCss.info}>
                        <span>Athor：wrma</span>
                        <span>Date：20170923</span>
                        <span>阅读量（233）</span>
                        <span><Icon type="heart" style={{ fontSize: 12, color: '#666' }} /> 点赞（12）</span>
                    </div>
                </Card>
            </div>
        );
    }
}