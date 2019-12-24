import React, { Component } from 'react';

class ReadMoreBtn extends Component {
    render() {
        return (
            <div>
                <button
                onClick={(evt) => { this.props.showhide(evt)}}
                    value={this.props.buttonId}
                    className="read-more-btn">
                Read more
                </button>
            </div>
        );
    }
}

export default ReadMoreBtn;
