import React from 'react';
import propTypes from 'prop-types'

import CommentGenerator from './CommentGenerator';
import CommentInput from './CommentInput';

import './commentssection.css'

class CommentsSectionContainer extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		comment: props.commentBanana
	  };
	};

	render(){

		console.log('wegewg:', this.props.comment)

		return(
			<div>
				{this.state.comment.map((comment, key) => <CommentGenerator key={key} comment={comment} /> )}
				<CommentInput />
			</div>
		);
	}
};

CommentsSectionContainer.propTypes ={
	comments: propTypes.arrayOf(
		propTypes.shape({
			text: propTypes.string,
			username: propTypes.string,
		})
	)
}

export default CommentsSectionContainer;
