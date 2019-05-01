import React from 'react';
import propTypes from 'prop-types';
import CommentsSectionContainer from '../CommentsSection/CommentsSectionContainer';

import './PostGenerator.css';

const PostGenerator = props => {
	console.log('post gen', props.post.comments)
	
	return(
		<div className='post'>
			<div className='header'>
				<img alt='profile picture' className='profile-picture' src={props.post.thumbnailUrl}/>
				<div>{props.post.username}</div>
			</div>

			<div className='image-container'>
				<img alt='some image' src={props.post.imageUrl} />
			</div>
			<CommentsSectionContainer commentBanana={props.post.comments} />
			<hr/>
		</div>
	)
}

export default PostGenerator;
