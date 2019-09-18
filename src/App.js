import React, { useState } from 'react';
import Entry from './components/Entry';
import Sorter from './components/Sorter';
import Finished from './components/Finished';
import Cache from './utility/Cache';
import './App.css';

function App() {
	const [list, setList] = useState([]);
	const [finished, setFinished] = useState(false);
	const cache = new Cache();
	const onListCreate = (listText) => {
		if (listText === '') {
			return;
		}
		const values = listText.replace(/\r\n/g, "\n").split("\n").filter(el => el !== '');
		setList(values);
	}
	const onFinished = () => {
		setFinished(true);
	}
	if (finished) {
		return <div className="container">
			<Finished data={list} />
		</div>;
	} else if (list.length === 0 && !finished) {
		return <div className="container">
			<Entry onListCreate={onListCreate} />
		</div>;
	} else {
		return (
			<div className="container">
				<Sorter onFinished={onFinished} data={list} cache={cache} />
			</div>
		);
	}
}

export default App;
