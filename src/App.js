import React from 'react';
import './App.css';
import Button from './Components/Button';
import Input from './Components/Input';
import Modal from './Components/Modal';
import Select from './Components/Select';
import GlobalStyle from './GlobalStyle';

function App() {
	return (
		<div>
			<GlobalStyle />
			<Button />
			<Input />
			<Modal />
			<Select />
		</div>
	);
}

export default App;
