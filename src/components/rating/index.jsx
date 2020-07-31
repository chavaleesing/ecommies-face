import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { Component } from 'react';
import './style.scss';


class Ratings extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render(props) {
    return (
        <div>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating
              name="simple-controlled"
              value={this.props.rate}
              precision={0.5} readOnly
            />
          </Box>
        </div>
      );
  }
}

export default Ratings;
