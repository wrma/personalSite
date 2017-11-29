/*
* @Author: ThinkPad
* @Date:   2017-11-07 14:15:43
* @Last Modified by:   ThinkPad
* @Last Modified time: 2017-11-07 14:23:28
*/
var React = require('react');
var ReactDOM = require('react-dom');
import Styles from './index.css';
import {Col,Row} from 'antd';


export default class Footer extends React.Component{
    render(){
        return(
            <div className={Styles.footer}>
                Copyright©2017 by wrma/deamon
            </div>
        );
    }
}