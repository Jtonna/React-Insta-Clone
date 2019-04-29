import React from 'react';
import './postcontainer.css';

import CommentsSection from '../CommentsSection/CommentsSections';

class PostContainer extends React.Component{
	render(){
		return(
			<div className='post-container'>
				<p> post container lives here </p>
				<CommentsSection />
			</div>
		)
	}
}

export default PostContainer;
