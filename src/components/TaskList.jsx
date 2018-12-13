import React from 'react';
import Button from './Button';

export default ({ tasks, handleCompleted, handleEdit, handleDelete }) => (
	<ul className="list-group">
		<React.Fragment>
		{ tasks.map((item, index) => (
				<li className="list-group-item" key={ index }>
					{ item.task }
					<div className="list-button">
						<Button onClick={ handleCompleted } label="Done" className="btn btn-sm btn-success"/>
						<Button onClick={ handleEdit } label="Edit" className="btn btn-sm btn-primary"/>
						<Button onClick={ handleDelete } label="Delete" className="btn btn-sm btn-danger"/>
					</div>
				</li>
		))}
		</React.Fragment>
	</ul>
);