/*
* @Author: ThinkPad
* @Date:   2017-10-31 15:05:12
* @Last Modified by:   wrma
* @Last Modified time: 2017-12-06 21:12:45
*/
var React = require('react');
var ReactDOM = require('react-dom');
import crumbCss from './index.css';
import {Row,Col,Breadcrumb} from 'antd';

export default class Crumb extends React.Component{
    render(){        
        return(
            <div>
                <Row>
                    <Col span={16} offset={4}>
                        <Breadcrumb className={crumbCss.crumb_wrap}>
                        {
                            this.props.category.map((item,index)=>{
                                return <Breadcrumb.Item key={index} className={crumbCss.crumb_item}><a href="">{item.categoryName}</a></Breadcrumb.Item> 
                            })
                        }
                        </Breadcrumb> 
                    </Col>
                </Row>
            </div>
        );
    }
}