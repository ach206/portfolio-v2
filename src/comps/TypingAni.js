import React, { Component } from 'react';
import Typed from 'typed.js';
let data = {
    strings: ["Frontend Web Dev", "UI Engineer"],
    typeSpeed: 40
}
let typedEl;
class TypingAni extends Component {
    componentDidMount() {
        typedEl = new Typed('.typingSpan', data)
    }

    render() {
        return (
            <div>
                <span className="typingSpan"></span>
            </div>
        );
    }
}

export default TypingAni;