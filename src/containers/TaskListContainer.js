import { connect } from 'react-redux';

import TaskList from '../components/TaskList';
import { deleteTask, getTasks, patchTaskCompleted } from '../data/actions/api';

const mapStateToProps = ({ tasks }) => ({ tasks });

const mapDispatchToProps = (dispatch)  => {
	return {
		handleCompleted: (id) => dispatch(patchTaskCompleted(id)),
		handleDelete: (id) => dispatch(deleteTask(id)),
		onLoad: () => dispatch(getTasks()),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);