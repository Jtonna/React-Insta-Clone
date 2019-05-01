import React from 'react';
import propTypes from 'prop-types'


const CommentGenerator = props => {

	return(
		<div className='comment-container'>
			<p className='comment-by'>{props.comment.username}</p>
			<p className='comment-text'>{props.comment.text}</p>
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
