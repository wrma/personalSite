/*
* @Author: ThinkPad
* @Date:   2017-10-31 15:12:45
* @Last Modified by:   wrma
* @Last Modified time: 2017-12-06 20:52:27
*/
import React from 'react';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Index from 'page/index/index.js'
import Share from 'page/share/index.js'
import About from 'page/about/index.js'
import Detail from 'page/detail/index.js'
import Photo from 'page/photo/index.js'

export default class Root extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Route exact path='/' component={Share} />
                    <Route path='/share' component={Share} />
                    <Route path='/about' component={About} />
                    <Route path='/detail' component={Detail} />
                </div>
            </Router>
        );
    };
}

// 入口定义
ReactDOM.render(<Root/>,document.getElementById('container'));
