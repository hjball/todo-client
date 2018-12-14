const reducer = (state, action) => {
	switch(action.type) {
		case 'updateInput' : return updateInput(state, action);
		case 'addTask' : return addTask(state, action);
		case 'completeTask' : return completeTask(state, action);
		case 'removeTask' : return deleteTask(state, action);
		case 'setTasks' : return setTasks(state, action);
		default: return state;
	}
};

const updateInput = (state, action) => ({
	...state,
	input: action.newInput
});

const addTask = (state, action) => {
	return {
		...state,
		tasks: [ ...state.tasks, {
			id: action.task.id,
			task: action.task.task,
			completed: 0,
		}],
		input: '',
	}
};

const completeTask = (state, action) => {
	console.log(state);
	return {
		...state,
		tasks: state.tasks.map((item, idx) => item.id === action.id ? 
		{
			id: item.id,
			task: item.task,
			completed: 1,
		} : { 
			id: item.id,
			task: item.task,
			completed: item.completed, 
		})
	}
};

const deleteTask = (state, action) => {
	return {
       ...state,
        tasks: state.tasks.filter(item => item.id !== action.id),
   };
}

const setTasks = (state, { tasks }) => {
	return {
		...state,
		tasks: tasks,
	}
}

export default reducer;