import React from 'react';
import CommentSection from '../CommentsSection'

import './PostGenerator.css';

const PostGenerator = props => {
	return(
		<div className='post'>

			<div className='header'>
				<img alt='profile picture' className='profile-picture' src={props.postBanana.thumbnailUrl}/>
				<div>{props.postBanana.username}</div>
			</div>

			<div className='image-container'>
				<img alt='some image' src={props.postBanana.imageUrl} />
			</div>
			<CommentSection commentBanana={props.postBanana.commentsBanana} />
		</div>

	)
}

export default PostGenerator;
