import React, {useState} from 'react';

function Sorter(props) {
	const { data, onFinished, cache } = props;
	const length = data.length;
	const [swapped, setSwapped] = useState(false)
	const [i, setI] = useState(0);
	const onSubmit = (shouldSwap) => {
		if (shouldSwap) {
			console.log(`Swapping ${data[i]} and ${data[i + 1]}.`);
			cache.update(data[i + 1], data[i])
			let tmp = data[i];
			data[i] = data[i + 1];
			data[i + 1] = tmp;
			setSwapped(true);
		} else {
			cache.update(data[i], data[i + 1]);
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
	const leftBeats = cache.getCachedLosers(data[i]);
	const rightBeats = cache.getCachedLosers(data[i + 1])
	if (leftBeats.includes(data[i + 1])) {
		onSubmit(false);
		return <div />;
	} else if (rightBeats.includes(data[i])) {
		onSubmit(true);
		return <div />;
	} else {
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
}

export default Sorter;
