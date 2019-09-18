import React, {useState} from 'react';

function Sorter(props) {
	const { data, onFinished } = props;
	const length = data.length;
	const [swapped, setSwapped] = useState(false)
	const [i, setI] = useState(0);
	const onSubmit = (shouldSwap) => {
		if (shouldSwap) {
			console.log(`Swapping ${data[i]} and ${data[i + 1]}.`);
			let tmp = data[i];
			data[i] = data[i + 1];
			data[i + 1] = tmp;
			setSwapped(true);
		} else {
			console.log(`Not swapping ${data[i]} and ${data[i + 1]}`)
		}
		if (i === length - 2 && !swapped) {
			onFinished();
		} else if (i === length - 2) {
			setI(0);
			setSwapped(false);
		} else {
			setI(i + 1);
		}
	}
	return (
		<div className="sorter">
			<p>
				Choose between
				<button className="button" type="button" onClick={() => onSubmit(false)}>{data[i]}</button>
				and
				<button className="button" type="button" onClick={() => onSubmit(true)}>{data[i + 1]}</button>
				.
			</p>
		</div>
	);
}

export default Sorter;
