import React from 'react';

export default ({ state }) => (
	<ul className="list-group">
		{ state.tasks.map((item, idx) => (
			<li className="list-group-item" key={ idx }>
				{ item }
			</li>
		))}
	</ul>
);