import React from 'react';

const Finished = (props) => {
	const items = props.data.map(i => <li key={i}>{i}</li>);
	return <div>
		Sorted List:
		<ul>
			{items}
		</ul>
	</div>;
}

export default Finished;
