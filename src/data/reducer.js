const reducer = (state, action) => {
	switch(action.type) {
		case 'updateInput' : return updateInput(state, action);
		case 'addTask' : return addTask(state);
		default: return state;
	}
};

const updateInput = (state, action) => ({
	...state,
	input: action.newInput
});

const addTask = state => ({
	...state,
	tasks: [ ...state.tasks, {
		task: state.input,
		completed: 0,
	}],
	input: '',
});

export default reducer;