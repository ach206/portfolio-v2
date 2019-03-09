import React, { Component } from 'react';

class TileBW extends Component {
    render() {
        return (
            <div className="tileCntr" id={this.props.tileID}>
                <div className="tiles">
                    <div className="bottom-tile">
                    </div>
                    <div className="top-tile">
                        <h3 className={this.props.title}>{this.props.title}</h3>
                        <a href="/">
                        <i class="material-icons md-48 hvr-float-shadow">{this.props.icon}</i>
                        </a>
                    </div>    
                </div>
            </div>
        );
    }
}

export default TileBW;

