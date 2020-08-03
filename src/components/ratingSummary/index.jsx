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
        const avgStar = 4.22 
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
                <div className="container-star-avg">
                    <Ratings rate={4.5} />
                    <div>
                        <p className="progress-star-count">{avgStar} / 5</p>
                        <h1 className="text-sum-rate">All rating (134)</h1>
                    </div>
                </div>
                <hr/>
                {ss}
            </div>
        );
    }
}

export default RatingSummary;
