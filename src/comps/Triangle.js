import React, { Component } from 'react';
import styled from 'styled-components';


class Triangle extends Component {
    render() {
        return (
            <Triangles>

                <img src="./src/images/triangle.svg" alt="triangle shape" />
            </Triangles>
            
        );
    }
}

export default Triangle;

const Triangles = styled.div`
  position: absolute;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  bottom: 20%;
  left: -50%;
  z-index: -1;
  `;
//   background-size: cover;