import React, {useState} from 'react';

function Sorter(props) {
	const { data } = props;
	const length = data.length;
	let swapped = false;
	do {
		swapped = false;
		for (let i = 0; i < length; i++) {
			//const shouldSwap = confirm(`Is ${data[i + 1]} better than ${data[i]}?`);
			if (data[i] > data[i + 1]) {
				let tmp = data[i];
				data[i] = data[i + 1];
				data[i + 1] = tmp;
				swapped = true;
			}
		}
	} while (swapped);
	let items = data.map(d => <li key={d}>{d}</li>);
	return (
		<div>
			Sorted list is:
			<ul>
				{items}
			</ul>

		</div>
	);
}

export default Sorter;
