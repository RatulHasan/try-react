import React, { Component } from 'react';
import PostData from '../data/posts.json';

import PostDetail from './PostDetail'
class PostList extends Component {
    constructor(props){
        super(props);
        this.dataCallBack = this.dataCallBack.bind(this)

    }
    dataCallBack(txtMsg){
        alert(txtMsg)
    }

    render() {
        return (
            <div>
                {PostData.map((postDetail, index) => {
                    return (
                        <PostDetail post={postDetail} key={index} dataCallBack={this.dataCallBack} />
                    );
                })}
            </div>
        );
    }
}

export default PostList;
