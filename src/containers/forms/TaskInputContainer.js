import { connect } from 'react-redux';

import TaskInput from '../../components/forms/TaskInput';
import { updateInput, addTask } from '../../data/actions/state';

const mapStateToProps = ({ input }) => ({ input })

const mapDispatchToProps = dispatch => ({
	handleChange: input => dispatch(updateInput(input)),
	handleSubmit: (e) => {
		e.preventDefault();
		dispatch(addTask())
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskInput);