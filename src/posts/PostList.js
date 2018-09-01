import React, { Component } from 'react';
import PostData from '../data/posts.json';
// import ReactYoutubeExample from '../thirdParty/ReactYoutubeExample'
import ReactMarkdown from '../thirdParty/ReactMarkdownExample'

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
                {/*<ReactYoutubeExample videoId='s4aIk0x5Eus'/>*/}
                <ReactMarkdown />
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
