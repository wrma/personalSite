/*
* @Author: ThinkPad
* @Date:   2017-10-22 15:06:13
* @Last Modified by:   wrma
* @Last Modified time: 2017-12-05 18:04:36
*/
var React = require('react');
var ReactDOM = require('react-dom');
import containerCss from './index.css';
import {Col,Row} from 'antd';
import {Card} from 'antd';
import EssayCard from '../essay_card/index.js'
import TagCard from '../tag_card/index.js'
import ImageCard from '../image_card/index.js'

export default class Container extends React.Component{
    constructor(){
        super();
        this.state={
            list:''
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
                        list: json
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
        const list = this.state.list.data;
        let essayList;
        // 必须在if外声明essayList变量,let/const关键字都拥有块级作用域
        if (list) {
            // console.log(list.length);
            // 如果返回回来的数据长度不为0显示数据
            essayList = list.length
                        ?list.map((item,index)=> {
                            if (!item.image) {
                                return <EssayCard 
                                    key={index} 
                                    title={item.title}
                                    summary={item.summary}
                                    author={item.author}
                                    date={item.date}
                                    readNum={item.readNum}
                                    likeNum={item.likeNum}
                                    tags={item.tags}>
                                </EssayCard>
                            }else{
                                return <ImageCard 
                                    key={index} 
                                    title={item.title}
                                    summary={item.summary}
                                    author={item.author}
                                    date={item.date}
                                    readNum={item.readNum}
                                    likeNum={item.likeNum}
                                    image={item.image}
                                    tags={item.tags}>
                                </ImageCard>
                            }
                            
                        })
                        :'没有加载到任何文章';
            console.log(essayList);
        }
        return(
            <div className={containerCss.wrap}>
                <Row>
                    <Col span={4}></Col>
                    <Col span={16}>
                        <Row>
                            <Col span={16}>
                                {essayList}
                            </Col>
                            <Col span={6} offset={2}>
                                <TagCard></TagCard>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={4}></Col>
                </Row>
            </div>
        );
    }
}