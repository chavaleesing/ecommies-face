import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { Component } from 'react';
import './style.scss';
import Ratings from '../rating'
import ProgressBar from 'react-bootstrap/ProgressBar'


class RatingSummary extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render(props) {
        let ss = []
        for (let i=5; i>0; i--) {
            ss.push(
                <div className="container-star">
                    <Ratings rate={i} />
                    <ProgressBar className="progress-star" variant="info" now={i*10} />
                    <p className="progress-star-count">({i})</p>
                </div>
            )
        }
        return (
            <div className="container">
                {ss}
            </div>
        );
    }
}

export default RatingSummary;
