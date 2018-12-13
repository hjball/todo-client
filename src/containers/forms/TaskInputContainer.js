import { connect } from 'react-redux';

import TaskInput from '../../components/forms/TaskInput';
import { updateInput } from '../../data/actions/state';
import { postTask } from '../../data/actions/api';

const mapStateToProps = ({ input }) => ({ input })

const mapDispatchToProps = dispatch => ({
	handleChange: input => dispatch(updateInput(input)),
	handleSubmit: (e, data) => {
		e.preventDefault();
		dispatch(postTask(data))
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskInput);