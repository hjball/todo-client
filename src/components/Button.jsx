import React from 'react';
import '../App.css';

export default ({ label, handleButton, className }) => (
	<button 
		onClick={ handleButton }
		className={ className }>
			{ label }
	</button>
)