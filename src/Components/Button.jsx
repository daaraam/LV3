import React from 'react';
import { styled } from 'styled-components';

function Button() {
	const LBtnClickHandler = () => {
		alert('click!');
	};

	return (
		<StContainer>
			<StHeader>Button</StHeader>
			<StBtnGroup>
				<StLargeBtn onClick={LBtnClickHandler} bdColor="rgb(85, 239, 196);" textColor="black">
					Large Primary Button ＞
				</StLargeBtn>
				<StMediumBtn bgColor="rgb(85, 239, 196);" textColor="black">
					Medium
				</StMediumBtn>
				<StSmallBtn bgColor="rgb(85, 239, 196);" textColor="black">
					Small
				</StSmallBtn>
			</StBtnGroup>
			<StBtnGroup style={{ marginTop: '12px' }}>
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
`;

const StLargeBtn = styled.button`
	width: 200px;
	height: 50px;
	padding: 1px 6px;
	font-weight: 600;
	border-radius: 8px;
	background-color: white;
	border: 3px solid ${props => props.bdColor || 'rgb(250, 177, 160);'};
	color: ${props => props.textColor || '#d63031'};
	cursor: pointer;
`;

const StMediumBtn = styled.button`
	width: 130px;
	height: 45px;
	padding: 1px 6px;
	font-weight: 300;
	border-radius: 8px;
	background-color: ${props => props.bgColor || 'rgb(250, 177, 160);'};
	color: ${props => props.textColor || '#d63031'};
	border: none;
	cursor: pointer;
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
