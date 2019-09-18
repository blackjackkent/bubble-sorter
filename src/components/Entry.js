import React, { useState } from 'react';

const Entry = (props) => {
	const [data, setData] = useState('');
	const { onListCreate } = props;
	return (
		<>
			<div>Enter a list of items to sort, one item per line:</div>
			<textarea value={data} onChange={(e) => setData(e.target.value)} />
			<button type="button" onClick={() => onListCreate(data)}>Submit</button>
		</>
	);
}

export default Entry;
