/*
* @Author: ThinkPad
* @Date:   2017-11-07 17:00:41
* @Last Modified by:   ThinkPad
* @Last Modified time: 2017-11-07 20:03:39
*/
var React = require('react');
var ReactDOM = require('react-dom');
import Styles from './index.css';
import { Button } from 'antd';

export default class PostComment extends React.Component{
    render(){
        return(
            <div className={Styles.wrap}>
                <div className={Styles.title}>
                    发表你的见解：
                </div>
                <div className={Styles.comment}>
                    <div className={Styles.content}></div>
                    <div className={Styles.submit}><Button>发表</Button></div>
                </div>

            </div>
        );
    }
}