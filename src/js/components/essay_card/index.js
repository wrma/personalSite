/*
* @Author: ThinkPad
* @Date:   2017-10-25 14:11:55
* @Last Modified by:   wrma
* @Last Modified time: 2017-12-05 18:04:08
*/
var React = require('react');
var ReactDOM = require('react-dom');
import essayCardCss from './index.css';
import {Card,Icon,Tag} from 'antd';

export default class EssayCard extends React.Component{
    render(){       
        return(
            <div>
                <div className={essayCardCss.card}>
                    <div className={essayCardCss.card_content}>
                       <div className={essayCardCss.desc}>
                            <div className={essayCardCss.desc_title}>
                                <span>{this.props.title}</span>
                                <span className={essayCardCss.tag}>
                                    {
                                        // 使数据嵌套可以渲染出来
                                        this.props.tags.map(function(item,index){
                                            return <Tag key={index}>{item.tagName}</Tag>
                                        })
                                    }
                                </span>
                            </div>
                            <div className={essayCardCss.desc_content}>
                                {this.props.summary}
                            </div>
                       </div>
                    </div>
                    <div className={essayCardCss.card_info}>
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