import React from 'react';
import PostGenerator from './PostGenerator.js';


import './PostContainer.css'

let PostContainer = props => {
	console.log('post container', props.postsBanana)
	return(
		<div className='posts-container'>
			{props.postsBanana.map(props => <PostGenerator key={props.imageUrl} post={props} />)}
			{/* Maps over the data in the array and sends information to Post. */}
		</div>
	)
}

export default PostContainer;
