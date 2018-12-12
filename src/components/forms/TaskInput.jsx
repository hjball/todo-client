import React from 'react';

export default ({ state, handleSubmit, handleChange }) => (
	<form onSubmit={ handleSubmit } className="panel-body">
		<div className="form-group">
			<input className="form-control" id="input" onChange={ handleChange } value={ state.input } />
			<button className="btn btn-success">Add task</button>
		</div>
	</form>
);