import React from 'react';

export default ({ input, handleSubmit, handleChange }) => (
	<form onSubmit={ handleSubmit } className="panel-body">
		<div className="form-group">
			<input 
				className="form-control" 
				onChange={ e => handleChange(e.currentTarget.value)} 
				value={ input }/>
			<button className="btn btn-success input-button">Add task</button>
		</div>
	</form>
);