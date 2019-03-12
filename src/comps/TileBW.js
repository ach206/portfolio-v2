import React, { Component } from 'react';

class TileBW extends Component {
    render() {
        return (
            <div className="tileCntr" id={this.props.tileID}>
                        <div className={this.props.asset}></div>    
                <div className="tiles">
                    <div className="bottom-tile">
                    </div>
                    <div className="top-tile">
                        <div className="tile_title_cntr">
                        <h2 className={this.props.title} id={this.props.title + "1"}>{this.props.title}</h2>
                        <h2 className={this.props.title} id={this.props.title + "2"}>{this.props.title}</h2>
                        </div>
                        <a href="/">
                        <i className="material-icons md-48 hvr-float-shadow">{this.props.icon}</i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default TileBW;

