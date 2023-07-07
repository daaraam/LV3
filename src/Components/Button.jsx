import React from 'react';
import { styled } from 'styled-components';

function Button() {
	const greenLBtnClickHandler = borderColor => {
		alert('click!');
	};

	const redLBtnClickHandler = () => {
		const pop = prompt('어렵나요?', '네에..');
	};

	return (
		<StContainer>
			<StHeader>Button</StHeader>
			<StBtnGroup>
				<StLargeGreenBtn onClick={greenLBtnClickHandler}>Large Primary Button ＞</StLargeGreenBtn>

				<StMediumBtn backGroundColor="rgb(85, 239, 196)" textColor="black" clkColor="#1FAFA3">
					Medium
				</StMediumBtn>

				<StSmallBtn backGroundColor="rgb(85, 239, 196)" textColor="black" clkColor="#1FAFA3">
					Small
				</StSmallBtn>
			</StBtnGroup>
			<StBtnGroup style={{ marginTop: '12px' }}>
				<StLargeBtn onClick={redLBtnClickHandler}>Large Negative Button 🔔</StLargeBtn>
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
`;

const StLargeBtn = styled.button`
	width: 200px;
	height: 50px;
	padding: 1px 6px;
	font-weight: 600;
	border-radius: 8px;
	background-color: white;
	border: 3px solid ${props => props.borderColor || 'rgb(250, 177, 160)'};
	color: ${props => props.textColor || '#d63031'};
	cursor: pointer;
	&:active {
		background-color: ${props => props.clkColor || '#FAB6AC'};
		position: relative;
	}
`;

const StLargeGreenBtn = styled.button`
	width: 200px;
	height: 50px;
	padding: 1px 6px;
	font-weight: 600;
	border-radius: 8px;
	background-color: white;
	border: 3px solid rgb(85, 239, 196);
	cursor: pointer;
	&:active {
		background-color: #c3ebe6;
		position: relative;
	}
`;

const StMediumBtn = styled.button`
	width: 130px;
	height: 45px;
	padding: 1px 6px;
	font-weight: 300;
	border-radius: 8px;
	background-color: ${props => props.backGroundColor || 'rgb(250, 177, 160)'};
	color: ${props => props.textColor || '#d63031'};
	border: none;
	cursor: pointer;
	&:active {
		background-color: ${props => props.clkColor || '#ea7070'};
		position: relative;
	}
`;

const StSmallBtn = styled.button`
	border: none;
	cursor: pointer;
	border-radius: 8px;
	background-color: ${props => props.backGroundColor || 'rgb(250, 177, 160)'};
	color: ${props => props.textColor || '#d63031'};
	height: 40px;
	width: 100px;
	&:active {
		background-color: ${props => props.clkColor || '#ea7070'};
		position: relative;
	}
`;
