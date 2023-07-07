import React from 'react';
import { styled } from 'styled-components';

function Input() {
	return (
		<StContainer>
			<StHeader>Input</StHeader>
			<StInputGroup>
				<div>
					이름
					<StInput type="text" />
				</div>
				<div>
					가격
					<StInput type="text" placeholder="0" />
				</div>
				<StSmallBtn bgColor="rgb(85, 239, 196);" textColor="black">
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

const StInputGroup = styled.div`
	display: flex;
	flex-direction: row;
	gap: 30px;
`;

const StSmallBtn = styled.button`
	border: none;
	cursor: pointer;
	border-radius: 8px;
	background-color: ${props => props.bgColor || 'rgb(250, 177, 160);'};
	color: ${props => props.textColor || '#d63031'};
	height: 40px;
	width: 100px;
`;
