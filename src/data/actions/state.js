export const updateInput = input => ({
	type: 'updateInput',
	newInput: input,
});

export const addTask = input => ({
	type: 'addTask',
	task: input,
});

// export const completeTask = id => ({
// 	type: 'completeTask',
// 	id: id,
// });

export const deleteTask = (id) => {
	return {
		type: "deleteTask",
		id: id,
	};
};

export const setTasks = tasks => {
	return {
		type: "setTasks",
		tasks: tasks,
	}
};