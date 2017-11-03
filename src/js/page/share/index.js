/*
* @Author: ThinkPad
* @Date:   2017-10-31 15:07:30
* @Last Modified by:   ThinkPad
* @Last Modified time: 2017-10-31 17:15:38
*/
var React = require('react');
var ReactDOM = require('react-dom');
import 'antd/dist/antd.css';
import Header from 'components/header/index.js'
import Container from 'components/container/index.js'
import Crumb from 'components/crumb/index.js'
import './index.css';

export default class Share extends React.Component{
    render(){
        return(
            <div>
                <Header></Header>
                <Crumb></Crumb>
                <Container></Container>
            </div>
        );
    }
}