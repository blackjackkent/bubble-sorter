import React, { useState } from 'react';
import Entry from './components/Entry';
import Sorter from './components/Sorter';
import './App.css';

function App() {
	const [list, setList] = useState([]);
	const onListCreate = (listText) => {
		const values = listText.replace(/\r\n/g, "\n").split("\n");
		console.log(values);
		setList(values);
	}
	if (list.length === 0) {
		return <Entry onListCreate={onListCreate} />
	}
	return (
		<Sorter data={list} />
	);
}

export default App;
