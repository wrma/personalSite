/*
* @Author: ThinkPad
* @Date:   2017-10-31 15:12:45
* @Last Modified by:   ThinkPad
* @Last Modified time: 2017-11-01 13:21:46
*/
import React from 'react';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Index from 'page/index/index.js'
import Share from 'page/share/index.js'

export default class Root extends React.Component{

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={Index} />
                    <Route path='share' component={Share} />
                </Switch>
            </BrowserRouter>
        );
    };
}

// 入口定义
ReactDOM.render(<Root/>,document.getElementById('container'));
