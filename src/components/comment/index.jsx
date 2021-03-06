import React from 'react';
import { Component } from 'react';
import './style.scss';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Ratings from '../rating'

class Comment extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render(props) {
        return (
            <div className="comment-template">
                <div className="comment-header">
                    <AccountCircleSharpIcon />
                    <p className="comment-username"> User2910</p>
                    <Ratings rate={5} />
                    <p className="comment-date-created"> 11/01/2020</p>
                </div>
                <div className="comment-body">
                    <p>This is the best cookie I ever had, most valuable</p>
                </div>
                <div className="comment-footer">
                    <button type="button" class="btn btn-light thumb-up"><ThumbUpIcon/>(20)</button>
                    <button type="button" class="btn btn-light thumb-down"><ThumbDownIcon />(7)</button>
                </div>
            </div>
        );
    }
}

export default Comment;
