import React from 'react';
import PostGenerator from './PostGenerator.js';


import './PostContainer.css'

let PostContainer = props => {
	return(
		<div className='posts-container'>
			{props.postsBanana.map(p => <PostGenerator key={p.imageUrl} post={p} />)}
			{/* Maps over the data in the array and sends information to Post. */}
			{console.log(props.postsBanana)}
		</div>
	)
}

export default PostContainer;
