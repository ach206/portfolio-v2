import React, { Component } from 'react';
import styled from 'styled-components';

const p = this.props;
let stack = p.stack;

class GalleryCard extends Component {
    render() {
        return (
            <div>
                <ProjectName>
                    <h2>{p.projectName}</h2>
                </ProjectName>
                <ProjectStack>
                    <ul>
                    stack.map(s, i =>{
                        `<li key=${i}>${s}</li>`
                    } );
                    </ul>
                </ProjectStack>
                <ProjectDescription>
                    <p>{p.description}</p>
                </ProjectDescription>
                <ProjectImg>
                    <img src={p.image} alt={p.projectName} id={p.projectName} />
                </ProjectImg>
                <ProjectURL>
                    <a href={p.image} alt={p.projectName} id={p.projectName} />
                    {/* //fix this``````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````` */}
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