/*
 * @Author: ThinkPad
 * @Date:   2017-10-14 18:36:33
 * @Last Modified by:   ThinkPad
 * @Last Modified time: 2017-11-07 14:26:58
 */
var React = require('react');
var ReactDOM = require('react-dom');
import Header from 'components/header/index.js'
import Container from 'components/container/index.js'
import indexCss from './index.css';
import Footer from 'components/footer/index.js'


export default class Index extends React.Component{
    render(){
        return(
            <div>
                <Header></Header>
                <Container></Container>
                <Footer></Footer>
            </div>
        );
    }
}