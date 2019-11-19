import React from 'react';
import propTypes from 'prop-types'


const CommentGenerator = props => {

	return(
		<div className='comment-container'>
			<span className='comment-by'>{props.comment.username}:</span>
			<span> {' '} </span>
			<span className='comment-text'>{props.comment.text}</span>
		</div>
	);
};

Comment.propTypes = {
	comment: propTypes.shape({
		text: propTypes.string,
		username: propTypes.string,
	})
}
export default CommentGenerator;
