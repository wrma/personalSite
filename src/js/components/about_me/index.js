/*
* @Author: ThinkPad
* @Date:   2017-11-03 11:10:05
* @Last Modified by:   ThinkPad
* @Last Modified time: 2017-11-03 21:05:26
*/
var React = require('react');
var ReactDOM = require('react-dom');
import aboutMeCss from './index.css';
import {Card,Icon} from 'antd';

export default class AboutMe extends React.Component{
    render(){
        return(
            <div>
                <div className={aboutMeCss.about_me}>
                    <div className={aboutMeCss.user_title}>
                        <div className={aboutMeCss.user_portrait}><img src="http://via.placeholder.com/100x100"></img></div>
                        <div className={aboutMeCss.user_name}>wrma</div>
                    </div>
                    <div className={aboutMeCss.user_desc}>
                    <div className={aboutMeCss.motor}>
                        如果你无法简洁的表达你的想法，那只说明你还不够了解它。
                        -- 阿尔伯特·爱因斯坦
                    </div>
                    <div className={aboutMeCss.concat}>
                        <Icon type="github" style={{ fontSize: 16, color: '#666' }}  />
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}