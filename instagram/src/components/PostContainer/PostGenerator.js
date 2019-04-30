import React from 'react';
import CommentSection from '../CommentsSection/CommentsSections.js';

import './PostGenerator.css';

const PostGenerator = props => {
	console.log('post gen', props)
	
	return(
		<div className='post'>
			<div className='header'>
				<img alt='profile picture' className='profile-picture' src={props.post.thumbnailUrl}/>
				<div>{props.post.username}</div>
			</div>

			<div className='image-container'>
				<img alt='some image' src={props.post.imageUrl} />
			</div>
			<CommentSection commentBanana={props.post.commentsBanana} />
		</div>

	)
}

export default PostGenerator;
