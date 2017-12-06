/*
* @Author: ThinkPad
* @Date:   2017-10-31 15:07:30
* @Last Modified by:   wrma
* @Last Modified time: 2017-12-06 21:09:33
*/
var React = require('react');
var ReactDOM = require('react-dom');
import 'antd/dist/antd.css';
import Header from 'components/header/index.js'
import Container from 'components/container/index.js'
import Crumb from 'components/crumb/index.js'
import shareCss from './index.css';
import Footer from 'components/footer/index.js'


export default class Share extends React.Component{
    constructor(){
        super();
        this.state={
            category:''
        };
    };
    componentDidMount(){
        this._isMounted = true; //flag
        var myFetchOptions = {
            method : 'GET'
        };
        fetch("https://www.easy-mock.com/mock/59c76db1e0dc663341b7173c/index/category/queryList.do", myFetchOptions)
            .then(response => response.json())
            .then(json => {
                if (this._isMounted) {
                    this.setState({
                        category: json
                    }); 
                }
                           
                }              
            );
    };
    componentWillUnmount(){
        this._isMounted = false; //重置flag
    };
    render(){
        const category = this.state.category.data;
        let categoryList;
        // 必须在if外声明essayList变量,let/const关键字都拥有块级作用域
        if (category) {
            categoryList = <Crumb category={category}></Crumb>
        }
        return(
            <div>
                <Header></Header>
                {categoryList}
                <Container></Container>
                <Footer></Footer>
            </div>
        );
    }
}