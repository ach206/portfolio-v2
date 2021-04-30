import React, {Component} from 'react'
import Typed from 'typed.js'
let data = {
    strings: ['new site coming soon...'],
    startDelay: 1000,
    typeSpeed: 60,
}
class TypingAni extends Component {
    componentDidMount() {
        new Typed('.typingSpan', data)
    }

    render() {
        return (
            <div>
                <span className='typingSpan'></span>
            </div>
        )
    }
}

export default TypingAni
