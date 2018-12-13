import { connect } from 'react-redux';

import TaskList from '../components/TaskList';
import { deleteTask } from '../data/actions/state';
import { getTasks } from '../data/actions/api';

const mapStateToProps = ({ tasks }) => ({ tasks });

const mapDispatchToProps = (dispatch, { id }) => ({
	// handleCompleted: () => dispatch(completeTask()),
	// handleDelete: () => dispatch(deleteTask(task.id)),
	onLoad: () => dispatch(getTasks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);