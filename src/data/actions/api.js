import axios from '../../axios';

import { setTasks } from './state';
import { addTask } from './state';
import { removeTask } from './state';
import { completeTask } from './state';

export const getTasks = () => dispatch => {
	axios.get("/tasks").then(({ data }) => {
		const tasks = data.data;
		dispatch(setTasks(tasks));
	});
};

export const postTask = () => (dispatch, getState) => {
	axios.post("/tasks", {
		task: getState().input,
	}).then(({ data }) => {
		const task = data.data;
		dispatch(addTask(task));
	});
};

export const deleteTask = (id) => dispatch => {
	axios.delete(`/tasks/${id}`).then(({ data }) => {
		dispatch(removeTask(id));
	})
};

export const patchTaskCompleted = (id) => dispatch => {
	axios.patch(`/tasks/${id}/completed`, {
		completed: 1, 
	}).then(({ data }) => {
		dispatch(completeTask(id));
	})
};