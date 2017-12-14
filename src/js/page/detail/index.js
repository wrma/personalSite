/*
* @Author: ThinkPad
* @Date:   2017-11-04 10:58:03
* @Last Modified by:   wrma
* @Last Modified time: 2017-12-14 16:07:47
*/
var React = require('react');
var ReactDOM = require('react-dom');
import {Col,Row} from 'antd';
import HeaderSimple from 'components/header_simple/index.js'
import Footer from 'components/footer/index.js'
import EssayDetail from 'components/essay_detail/index.js'
import Comment from 'components/comment_list/index.js'
import PostComment from 'components/post_comment/index.js'
import styles from './index.css';

export default class About extends React.Component{
    constructor(){
        super();
        this.state={
            detail:''
        };
    };
    componentDidMount(){
        this._isMounted = true; //flag
        var myFetchOptions = {
            method : 'GET',
        };
        fetch("https://www.easy-mock.com/mock/59c76db1e0dc663341b7173c/index/eaasyDetail.do?id="+this.props.params.id, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                if (this._isMounted) {
                    this.setState({
                        detail: json
                    }); 
                    // console.log(this.pros.params.id);
                }
                           
                }              
            );
    };
    componentWillUnmount(){
        this._isMounted = false; //重置flag
    };
    render(){
        const detail = this.state.detail.data;
        let essayDetail;
        // console.log(detail);
        // 必须在if外声明essayList变量,let/const关键字都拥有块级作用域
        if (detail) {
            essayDetail =   <EssayDetail 
                                title={detail.title}
                                author={detail.author}
                                content={detail.content}
                                date={detail.date}
                                commentNum={detail.commentNum}
                                likeNum={detail.likeNum}
                                readNum={detail.readNum}
                                tags={detail.tags}
                                >
                            </EssayDetail>;
        }
        return(
            <div>
                <HeaderSimple></HeaderSimple>
                <Row className={styles.wrap}>
                    <Col span={14} offset={5}>
                        {essayDetail}
                        <Comment></Comment>
                        <PostComment></PostComment>
                    </Col>
                </Row>
                <Footer></Footer>
            </div>
        );
    }
}