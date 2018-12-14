import React, { Component } from 'react';
import Button from './Button';

class TaskList extends Component {
	componentDidMount() {
		this.props.onLoad();
	}

	render () {
		const { tasks } = this.props;

		return (
			<div className="list-container">
				<ul className="list-group">
					<React.Fragment>
					{ tasks.map((item, index) => (
						<li className={ item.completed === 1 ? "list-group-item list-item-completed" : "list-group-item" } key={ index }>
							<React.Fragment>
								<div className="list-text">{ item.task }</div>
								<div className="list-button">
								{ item.completed === 1 ? null :
									<React.Fragment>
										<Button onClick={ () => this.props.handleCompleted(item.id) } label="Done" className="btn btn-sm btn-success"/>
										<Button onClick={ tasks.handleEdit } label="Edit" className="btn btn-sm btn-primary"/>
									</React.Fragment>
								}
									<Button onClick={ () => this.props.handleDelete(item.id) } label="Delete" className="btn btn-sm btn-danger"/>
								</div>
							</React.Fragment>
						</li>
					))}
					</React.Fragment>
				</ul>
			</div>
		)
	}
};

export default TaskList;