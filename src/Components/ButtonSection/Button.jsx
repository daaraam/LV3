import React from 'react';
import { styled } from 'styled-components';

function Button() {
	return (
		<StContainer>
			<h1>Button</h1>
			<StBtnGroup>
				<StBtn onClick={() => alert('클릭')} bgColor={'green'} type="large">
					Large Primary Button ＞
				</StBtn>
				<StBtn bgColor={'green'} type="medium">
					Medium
				</StBtn>
				<StBtn bgColor={'green'} type="small">
					Small
				</StBtn>
			</StBtnGroup>
			<StBtnGroup>
				<StBtn onClick={() => prompt('어렵나요', '네에..')} bgColor={'pink'} type="large">
					Large Negative Button 🔔
				</StBtn>
				<StBtn bgColor={'pink'} type="medium">
					Medium
				</StBtn>
				<StBtn bgColor={'pink'} type="small">
					Small
				</StBtn>
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
	margin: 10px;
`;

export const StBtn = styled.button`
	box-sizing: border-box;
	border: none;
	font-weight: 600;
	border-radius: 8px;
	cursor: pointer;
	&:active {
		filter: brightness(70%);
	}
	/* ${props => colorHandler(props.bgColor)}; 비구조분해할당 밑에는구조분해할당이랍니다*/

	${({ bgColor }) => colorHandler(bgColor)};
	${({ type }) => sizeHandler(type)};
`;

const colorHandler = parameter => {
	switch (parameter) {
		case 'green':
			return `border: 3px solid rgb(85, 239, 196); background-color: rgb(85, 239, 196)`;
		case 'pink':
			return `border: 3px solid rgb(250, 177, 160); color: rgb(214, 48, 49); background-color: rgb(250, 177, 160)`;
		default:
			return '';
	}
};

const sizeHandler = parameter => {
	switch (parameter) {
		case 'large':
			return `width: 200px; height: 50px; background-color: white; font-weight: 600;`;
		case 'medium':
			return `width: 130px; height: 45px;`;
		default:
			// Small
			return `width: 100px; height: 40px;`;
	}
};
