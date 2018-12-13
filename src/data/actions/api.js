import axios from '../../axios';

import { setTasks } from './state';
import { addTask } from './state';

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