import React, { Component } from 'react';
import Button from './Button';
import { getTasks } from '../data/actions/api';

class TaskList extends Component {
	componentDidMount() {
		this.props.onLoad();
	}

	render () {
		const { tasks } = this.props;

		return (
			<ul className="list-group">
				<React.Fragment>
				{ tasks.map((item, index) => (
					<li className="list-group-item" key={ index }>
						{ item.task }
						<div className="list-button">
							<Button onClick={ tasks.handleCompleted } label="Done" className="btn btn-sm btn-success"/>
							<Button onClick={ tasks.handleEdit } label="Edit" className="btn btn-sm btn-primary"/>
							<Button onClick={ tasks.handleDelete } label="Delete" className="btn btn-sm btn-danger"/>
						</div>
					</li>
				))}
				</React.Fragment>
			</ul>
		)
	}
};

export default TaskList;