import React from 'react';
import './App.css';
import Button from './Components/ButtonSection/Button';
import Input from './Components/InputSection/Input';
import Modal from './Components/ModalSection/Modal';
import OptionVisible from './Components/SelectSection/OptionVisible';
import Select from './Components/SelectSection/Select';
import GlobalStyle from './GlobalStyle';

function App() {
	return (
		<div>
			<GlobalStyle />
			<Button />
			<Input />
			<Modal />
			<Select />
			<OptionVisible />
		</div>
	);
}

export default App;
