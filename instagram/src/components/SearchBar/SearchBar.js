import React from 'react';
import './searchbar.css'
import Logo from '../../logo.svg';


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
		  <p>C</p>
		  <p>H</p>
		  <p>P</p>
	  </div>
	</div>
	);
  };

export default SearchBar;
