import React, { useState } from 'react';
import { styled } from 'styled-components';
import { StBtn, StContainer } from '../ButtonSection/Button';

function Input() {
	const [nameInput, setNameInput] = useState('');
	const [priceInput, setPriceInput] = useState('0');

	const handleChange = event => {
		const { name, value } = event.target;
		if (name === 'priceInput') {
			const removedNaN = value.replace(/[^0-9]/g, ''); // NaN을 공백으로 replace해주는 부분.
			const formattedPrice = (+removedNaN).toLocaleString(); //세자리 콤마찍어줌
			setPriceInput(formattedPrice);
		} else if (name === 'nameInput') {
			setNameInput(value);
		}
	};

	const handleSubmit = event => {
		event.preventDefault();
		if (nameInput.trim() === '' && priceInput === '0') {
			alert('이름과 가격 모두 입력해주세요.');
		} else {
			alert(`{name:${nameInput}, price:${priceInput.replaceAll(',', '')}}`);
		}
	};

	return (
		<StContainer>
			<h1>Input</h1>
			<StInputGroup onSubmit={handleSubmit}>
				<div>
					이름
					<StInput type="text" name="nameInput" value={nameInput} onChange={handleChange} />
				</div>
				<div>
					가격
					<StInput onChange={handleChange} type="text" name="priceInput" value={priceInput} />
				</div>
				<StBtn bgColor={'green'}>저장</StBtn>
			</StInputGroup>
		</StContainer>
	);
}

export default Input;

const StInput = styled.input`
	padding: 1px 12px;
	background-color: white;
	width: 200px;
	height: 40px;
	border-radius: 12px;
	padding: 0 12px 0 12px;
	border: 1px solid rgb(51, 51, 51);
	&:focus {
		outline: 1px solid black;
	}
`;

const StInputGroup = styled.form`
	display: flex;
	flex-direction: row;
	gap: 30px;
`;
