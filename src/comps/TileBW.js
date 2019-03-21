import React, { Component } from 'react';
import styled from 'styled-components';

class TileBW extends Component {
    render() {
        return (
            <Tile>

            <div className="tileCntr" id={this.props.tileID}>
                        <div className={this.props.asset}></div>    
                <div className="tiles">
                    {/* <div className="bottom-tile"> */}
                        <img src={this.props.bkg} alt={this.props.title} />
                    {/* </div> */}
            
                    <div className="top-tile">
                        <div className="tile_title_cntr">
                        <h3 className={this.props.title} id={this.props.title + "1"}>{this.props.title}</h3>
                        <h3 className={this.props.title} id={this.props.title + "2"}>{this.props.title}</h3>
                        </div>
                        <a href="/">
                        <i className="material-icons md-48 hvr-float-shadow">{this.props.icon}</i>
                        </a>
                    </div>
                </div>
            </div>
            </Tile>
        );
    }
}

export default TileBW;

const Tile = styled.div`
display: flex;
position: relative;
transform: matrix(1, -0.04, -0.05, 1, 80, 80);
transition: transform 1s;
:hover {
        transform: rotate(-2deg);
    }
`;
// const BottomTile = styled.div`
// object-fit: contain;
// position: relative;
// box-shadow: 2 px 2 px 2 px 1 px rgba(0, 0, 0, 0.2);
// `;

