import React, { Component } from 'react';

class PostDetails extends Component {
    constructor (props){
        super(props);
        this.titleClicked = this.titleClicked.bind(this)
        this.toggleShow = this.toggleShow.bind(this)
        this.state = {
            showContent: false
        }

    }

    titleClicked(event){
        event.preventDefault()
        // alert(this.props.title)
        const {dataCallBack} = this.props
        if(dataCallBack !== undefined){
            dataCallBack('Hello World!')
        }
        console.log(this.props)
    }

    toggleShow(event){
        event.preventDefault()
        this.setState({
            showContent: true
        })
    }

    render() {
        const {post} = this.props
        const {showContent} = this.state
        return (
            <div className="App">
                <p onClick={this.titleClicked}>{post.title}</p>
                {showContent === false ? <button onClick={this.toggleShow}> Read more</button> : <button onClick={this.toggleShow}> Less</button> }
                {showContent === true ? <p>{post.body}</p> : "" }
                {/*<p className={`${showContent === true ? 'd-block' : 'd-none'}`}>{post.body}</p>*/}
                <hr />
            </div>
        );
    }
}

export default PostDetails;
