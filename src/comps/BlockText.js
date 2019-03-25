import React, { Component } from 'react';
import styled from 'styled-components';


class BlockText extends Component {
    render() {
        return (
            <div>
                <BlockCntr>

                <blockquote>
                    I've found myself learning not to accept no for an answer
                    &mdash;at least not the <em>first</em> no. When I think of
                    pioneers who've paved the way in front of me I have to think
                    about all the times they've heard "no" or better yet "you can't".
                    That answer is just unacceptable. <strong>I can. I will.</strong>
                    Together we can start dissolving these old ways of thinking and
                    shift our energy towards collective development for a better future.
                    
                 </blockquote>
                </BlockCntr>
            </div>
        );
    }
}

export default BlockText;

const BlockCntr = styled.div`
    max-width: 300px;
    text-align: justify;
    font-family: monospace;
    font-weight: 700;
    position: initial;
    color: rgb(128, 128, 128);
    color: rgba(128, 128, 128, .8);
`;