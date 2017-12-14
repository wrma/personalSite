/*
* @Author: ThinkPad
* @Date:   2017-10-25 14:11:55
* @Last Modified by:   wrma
* @Last Modified time: 2017-12-14 16:07:39
*/
var React = require('react');
var ReactDOM = require('react-dom');
import essayCardCss from './index.css';
import {Card,Icon,Tag} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router'

export default class EssayCard extends React.Component{
    constructor(){
        super();
        this.state={
            // id: this.props.id,
        };
    };
    componentDidMount(){
        this._isMounted = true; //flag
        this.setState({id:this.props.id});
        console.log(this.state.id); 
    };
    componentWillUnmount(){
        this._isMounted = false; //重置flag
    };
    render(){   
        return(
            <div>
                <Link to={`detail/${this.props.id}`} target="_blank">
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
                </Link> 
            </div>
        );
    }
}