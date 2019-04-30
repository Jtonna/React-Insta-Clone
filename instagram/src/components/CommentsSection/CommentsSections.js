import React from 'react';
import './commentssection.css'

const CommentsSection = props => {
	return(
		<div className='comment-container'>

			<p className='comment-by'>{props.username}</p>
			<p className='comment-text'>{props.text}</p>

		</div>
	);
};

export default CommentsSection;
