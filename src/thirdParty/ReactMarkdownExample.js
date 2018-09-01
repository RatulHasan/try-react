import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import ReactDOM from 'react-dom'

class ReactMarkdownExample extends Component {

    render() {
        const input = '# This is a header\n\nAnd this is a paragraph \n\n # Create with markdown ' +
            '\n' +
            'Inline-style: \n' +
            '![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")\n' +
            '\n' +
            'Reference-style: \n' +
            '![alt text][logo]\n' +
            '\n' +
            '[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"'
        return (
            <ReactMarkdown source={input} />
        );
    }
}

export default ReactMarkdownExample;

