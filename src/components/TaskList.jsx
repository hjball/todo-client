import React from 'react';
import Button from './Button';

export default ({ state, handleCompleted, handleEdit, handleDelete }) => (
	<ul className="list-group">
		{ state.tasks.map((item, idx) => (
			<React.Fragment>
				<li className="list-group-item" key={ idx }>
					{ item }
					<div className="list-button">
						<Button onClick={ handleCompleted } label="Done" className="btn btn-sm btn-success"/>
						<Button onClick={ handleEdit } label="Edit" className="btn btn-sm btn-primary"/>
						<Button onClick={ handleDelete } label="Delete" className="btn btn-sm btn-danger"/>
					</div>
				</li>
			</React.Fragment>
		))}
	</ul>
);