const reducer = (state, action) => {
	switch(action.type) {
		case 'updateInput' : return updateInput(state, action);
		case 'addTask' : return addTask(state, action);
		// case 'completeTask' : return completeTask(state, action);
		case 'deleteTask' : return deleteTask(state);
		case 'setTasks' : return setTasks(state, action);
		default: return state;
	}
};

const updateInput = (state, action) => ({
	...state,
	input: action.newInput
});

const addTask = (state, action) => {	
	console.log(action);
	return {
		...state,
		tasks: [ ...state.tasks, {
			id: action.id,
			task: action.input,
			completed: 0,
		}],
		input: '',
	}
};

// const completeTask = (state, action) => ({
// 	...state,
// 	tasks[action.id]: [{
// 		id: state.id,
// 		tasks: state.task,
// 		completed: 1,
// 	}],
// });

const deleteTask = (state, action) => {
	let newState = state;

	delete newState.tasks[action.id];

	return {
		...state,
		newState,
	}
}

const setTasks = (state, { tasks }) => {
	return {
		...state,
		tasks: tasks,
	}
}

export default reducer;