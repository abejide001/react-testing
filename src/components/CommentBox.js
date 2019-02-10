import React, { Component } from 'react';

class CommentBox extends Component {
    state = {
            comment: ''
    }
    handleChange = (e) => {
        // const data = { ...this.state.data };
        // data[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ comment: e.target.value });
      };
     handleSubmit = e => {
         e.preventDefault()
         this.setState({ comment: '' })
     }
    render() {
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
                 <h4>Add a text</h4> 
                 <textarea value={this.state.comment} onChange={this.handleChange} name='comment'/>
                 <button>Submit</button>
                </form> 
            </div>
        );
    }
}

export default CommentBox;
