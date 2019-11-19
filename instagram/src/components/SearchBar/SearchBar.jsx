import React from 'react';
import './searchbar.css'

//logo imports

import Logo from '../../img/Instagram-Camera.svg';
import MagnifyingGlassLogo from '../../img/musica-searcher.svg';
import TimelineLogo from '../../img/timeline.svg';
import HeartLogo from '../../img/heart.svg'
import UserLogo from '../../img/user.svg'


const SearchBar = () => {
	return (
	  <div className='search-bar'>
		<div className='image-wrapper'>
		  <img alt='instagram company logo' src={Logo} className='ig-logo'/>
		</div>
		<div className='search-box-wrapper'>
		  <input type='text' placeholder='Search' className='search-text-box' />
		</div>
		<div className='tools-container'>
			 {/* add compass, heart & user vector's */}
			 <img alt='Timeline' src={TimelineLogo} />
			 <img alt='' src={HeartLogo} />
			 <img alt='' src={UserLogo} />
	  </div>
	</div>
	);
  };

export default SearchBar;
