import React, { Component } from 'react';
import styled from 'styled-components';
import PlaceholderImg from '../images/macbook-mock-dribbble.svg';

const p = this.props;
let stack = p.stack.map((s, i) => 
    `<li key=${i}>${s}</li>`
);

class GalleryCard extends Component {
    render() {
        return (
            <div>
                <ProjectName>
                    <h2>{p.projectName}</h2>
                </ProjectName>
                <ProjectStack>
                    <ul>
                    {stack}
                    </ul>
                </ProjectStack>
                <ProjectDescription>
                    <p>{p.description}</p>
                </ProjectDescription>
                <ProjectImg>
                    <img data-src={PlaceholderImg} alt={p.projectName} id={p.projectName} />
                </ProjectImg>
                <ProjectURL>
                    <a href="#" alt={p.projectName} id={p.projectName} />
                </ProjectURL>

                
            </div>
        );
    }
}

export default GalleryCard;

const ProjectName = styled.div`

`;
const ProjectStack = styled.div`

`;
const ProjectDescription = styled.div`

`;
const ProjectImg = styled.div`

`;
const ProjectURL = styled.div`

`;