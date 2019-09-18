import React, { useState } from 'react';
import Entry from './components/Entry';
import Sorter from './components/Sorter';
import Finished from './components/Finished';
import './App.css';

function App() {
	const [list, setList] = useState([]);
	const [finished, setFinished] = useState(false);
	const onListCreate = (listText) => {
		const values = listText.replace(/\r\n/g, "\n").split("\n");
		setList(values);
	}
	const onFinished = () => {
		setFinished(true);
	}
	if (finished) {
		return <Finished data={list} />
	} else if (list.length === 0 && !finished) {
		return <Entry onListCreate={onListCreate} />
	} else {
		return (
			<Sorter onFinished={onFinished} data={list} />
		);
	}
}

export default App;
