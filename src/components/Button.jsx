import React from 'react';
import '../App.css';

export default ({ label, onClick, className }) => (
	<button 
		onClick={ onClick }
		className={ className }>
			{ label }
	</button>
)