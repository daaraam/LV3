import React from 'react';
import { styled } from 'styled-components';

function Button() {
	return (
		<StContainer>
			<StHeader>Button</StHeader>
			<StBtnGroup>
				<StLargeBtn>Large Primary Button</StLargeBtn>
				<StMediumBtn>Medium</StMediumBtn>
				<StSmallBtn>Small</StSmallBtn>
			</StBtnGroup>
		</StContainer>
	);
}

export default Button;

const StContainer = styled.div`
	margin: 10px;
`;
const StBtnGroup = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
`;

const StHeader = styled.div`
	display: block;
	font-size: 2em;
	margin-block-start: 0.67em;
	margin-block-end: 0.67em;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
	font-weight: bold;
	font-family: ;
`;

const StLargeBtn = styled.button`
	width: 200px;
	height: 50px;
	padding: 1px 6px;
	font-weight: 600;
	border-radius: 8px;
	background-color: rgb(255, 255, 255);
	border: 3px solid rgb(85, 239, 196);
	cursor: pointer;
`;

const StMediumBtn = styled.button`
	width: 130px;
	height: 45px;
	padding: 1px 6px;
	font-weight: 300;
	border-radius: 8px;
	background-color: rgb(85, 239, 196);
	border: none;
	cursor: pointer;
`;

const StSmallBtn = styled.button`
	border: none;
	cursor: pointer;
	border-radius: 8px;
	background-color: rgb(85, 239, 196);
	color: rgb(0, 0, 0);
	height: 40px;
	width: 100px;
`;
