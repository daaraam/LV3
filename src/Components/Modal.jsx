import React from 'react';
import { styled } from 'styled-components';

function Modal() {
	return (
		<StContainer>
			<h1>Modal</h1>
			<StModalGroup>
				<StSmallBtn backGroundColor="rgb(85, 239, 196);" textColor="black">
					open modal
				</StSmallBtn>
				<StLargeBtn>open modal</StLargeBtn>
			</StModalGroup>
		</StContainer>
	);
}

export default Modal;

const StModalGroup = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
`;

const StContainer = styled.div`
	margin: 10px;
`;

const StLargeBtn = styled.button`
	width: 200px;
	height: 50px;
	padding: 1px 6px;
	font-weight: 600;
	border-radius: 8px;
	background-color: white;
	border: 3px solid ${props => props.borderColor || 'rgb(250, 177, 160);'};
	color: ${props => props.textColor || '#d63031'};
	cursor: pointer;
	&:active {
		background-color: #fab6ac;
		position: relative;
	}
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
