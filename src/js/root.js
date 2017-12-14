/*
* @Author: ThinkPad
* @Date:   2017-10-31 15:12:45
* @Last Modified by:   wrma
* @Last Modified time: 2017-12-14 16:55:43
*/
import React from 'react';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import Index from 'page/index/index.js'
import Share from 'page/share/index.js'
import About from 'page/about/index.js'
import Detail from 'page/detail/index.js'
import Photo from 'page/photo/index.js'

export default class Root extends React.Component{
    render(){
        return(
            <Router history={hashHistory}>
                <Route path='/' component={Index} />
                <Route path='/share' component={Share} />
                <Route path='/about' component={About} />
                <Route path='/detail/:id' component={Detail} />
            </Router>
        );
    };
}

// 入口定义
ReactDOM.render(<Root/>,document.getElementById('container'));
