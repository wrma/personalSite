/*
 * @Author: ThinkPad
 * @Date:   2017-10-14 18:36:33
 * @Last Modified by:   ThinkPad
 * @Last Modified time: 2017-10-31 17:15:26
 */
var React = require('react');
var ReactDOM = require('react-dom');
import 'antd/dist/antd.css';
import Header from 'components/header/index.js'
import Container from 'components/container/index.js'
import './index.css';

export default class Index extends React.Component{
    render(){
        return(
            <div>
                <Header></Header>
                <Container></Container>
            </div>
        );
    }
}