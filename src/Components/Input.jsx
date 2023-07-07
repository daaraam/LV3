import React, { useState } from 'react';
import { styled } from 'styled-components';

function Input() {
	const [money, setMoney] = useState('');
	const [nameInput, setNameInput] = useState('');
	const [priceInput, setPriceInput] = useState('');

	const addComma = price => {
		let returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		return returnString;
	};

	const onChangeComma = event => {
		const { value } = event.target;
		let str = value.replaceAll(',', '');
		setMoney(str);
	};
	const nameInputChange = event => {
		setNameInput(event.target.value);
	};
	const priceInputChange = event => {
		setPriceInput(event.target.value);
	};

	const unValidInput = nameInput.length === 0 || priceInput.length === 0;

	const handleSubmit = event => {
		event.preventDefault();
		if (unValidInput) {
			alert('이름과 가격 모두 입력해주세요.');
			setNameInput('');
			setPriceInput('');
		}
	};

	return (
		<StContainer>
			<StHeader>Input</StHeader>
			<StInputGroup onSubmit={handleSubmit}>
				<div>
					이름
					<StInput type="text" name="nameInput" value={nameInput} onChange={nameInputChange} />
				</div>
				<div>
					가격
					<StInput
						onChange={event => {
							priceInputChange(event);
							onChangeComma(event);
						}}
						value={addComma(money + priceInput) || ''}
						type="text"
						name="priceInput"
						placeholder="0"
					/>
				</div>
				<StSmallBtn backGroundColor="rgb(85, 239, 196);" textColor="black" type="submit">
					저장
				</StSmallBtn>
			</StInputGroup>
		</StContainer>
	);
}

export default Input;

const StContainer = styled.div`
	margin: 10px;
`;

const StHeader = styled.div`
	display: block;
	font-size: 2em;
	margin-block-start: 0.67em;
	margin-block-end: 0.67em;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
	font-weight: bold;
`;

const StInput = styled.input`
	padding: 1px 12px;
	background-color: white;
	width: 200px;
	height: 40px;
	border-radius: 12px;
	padding: 0 12px 0 12px;
	border: 1px solid rgb(51, 51, 51);
`;

const StInputGroup = styled.form`
	display: flex;
	flex-direction: row;
	gap: 30px;
`;

const StSmallBtn = styled.button`
	border: none;
	cursor: pointer;
	border-radius: 8px;
	background-color: ${props => props.backGroundColor || 'rgb(250, 177, 160);'};
	color: ${props => props.textColor || '#d63031'};
	height: 40px;
	width: 100px;
	&:active {
		background-color: #1fafa3;
		position: relative;
	}
`;
