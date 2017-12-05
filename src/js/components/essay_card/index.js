/*
* @Author: ThinkPad
* @Date:   2017-10-25 14:11:55
* @Last Modified by:   wrma
* @Last Modified time: 2017-12-04 21:59:37
*/
var React = require('react');
var ReactDOM = require('react-dom');
import essayCardCss from './index.css';
import {Card,Icon} from 'antd';

export default class EssayCard extends React.Component{
    constructor(){
        super();
        this.state={
            essay:''
        };
    };
    componentWillMount(){ 
        console.log('componentWillMount')
    };
    componentDidMount(){
        this._isMounted = true; //flag
        var myFetchOptions = {
            method : 'GET'
        };
        fetch("https://www.easy-mock.com/mock/59c76db1e0dc663341b7173c/index/articles", myFetchOptions)
            .then(response => response.json())
            .then(json => {
                if (this._isMounted) {
                    this.setState({
                        essay: json
                    }); 
                }
                           
                }              
            );
        console.log('componentDidMount');
    };
    componentWillUnmount(){
        this._isMounted = false; //重置flag
    };
    render(){
        const essay = this.state.essay.data;
        let essayList;
        // 必须在if外声明essayList变量,let/const关键字都拥有块级作用域
        if (essay) {
            console.log(essay.length);
            essayList = essay.length
                        ?essay.map((item,index)=> (
                            <Card key={index} className={essayCardCss.card} title={item.title} extra={<a href="#">More</a>}>
                                <div className={essayCardCss.content}>
                                    {item.summary}
                                </div>
                                <div className={essayCardCss.info}>
                                    <span>Athor：{item.author}</span>
                                    <span>Date：{item.date}</span>
                                    <span>阅读量（{item.readNum}）</span>
                                    <span><Icon type="heart" style={{ fontSize: 12, color: '#666' }} /> 点赞（{item.likeNum}）</span>
                                </div>
                            </Card>
                        ))
                        :'没有加载到任何文章';
            console.log(essayList);
        }
        
        return(
            <div>
                {essayList}
            </div>
        );
    }
}