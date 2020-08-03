import React from 'react';
import { Component } from 'react';
import './style.scss';
import AccountBoxTwoToneIcon from '@material-ui/icons/AccountBoxTwoTone';

class Comment extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render(props) {
        return (
            <div className="container">
                <div className="comment-header">
                    <AccountBoxTwoToneIcon color="primary" fontSize="large" />
                    <p className="comment-username"> User2910</p>
                    <p className="comment-date-created"> 11 Jan 2020</p>
                </div>
                <div className="comment-body">
                    123
                </div>
                <div className="comment-footer">
                    123
                </div>
            </div>
        );
    }
}

export default Comment;
