import React from 'react';

const Finished = (props) => {
	const items = props.data.map(i => <li key={i}>{i}</li>);
	return <div>
		<h1>Finished!</h1>
		<p>Here is your list sorted by preference:</p>
		<ul>
			{items}
		</ul>
	</div>;
}

export default Finished;
