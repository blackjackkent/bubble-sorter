import React, { useState } from 'react';

const Entry = (props) => {
	const [data, setData] = useState('');
	const { onListCreate } = props;
	return (
		<div className="entry">
			<h1>Sort a list of items by your preference!</h1>
			<p>
				Enter a list of values below, with each item on its own line.{' '}
				This app will ask you to make choices between individual pairs to gradually sort{' '}
				your list into your overall preference!
			</p>
			<textarea value={data} onChange={(e) => setData(e.target.value)} />
			<p><button className="button" type="button" onClick={() => onListCreate(data)}>Submit</button></p>
		</div>
	);
}

export default Entry;
