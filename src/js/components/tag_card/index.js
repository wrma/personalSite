/*
* @Author: ThinkPad
* @Date:   2017-10-25 14:37:37
* @Last Modified by:   ThinkPad
* @Last Modified time: 2017-11-03 21:15:02
*/
var React = require('react');
var ReactDOM = require('react-dom');
import tagCardCss from './index.css';
import {Card,Icon} from 'antd';

export default class ImageCard extends React.Component{
    render(){
        return(
            <div>
                <Card className={tagCardCss.card} title={<Icon type="tag" style={{ fontSize: 18}} />} extra={<a href="#">More</a>}>
                    <ol className={tagCardCss.list}>
                        <li><a>响应式开发</a></li>
                        <li><a>浮动布局详解</a></li>
                        <li><a>北京游</a></li>
                    </ol>
                </Card>
            </div>
        );
    }
}