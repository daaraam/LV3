import React from 'react';
import { styled } from 'styled-components';

function Select() {
	return (
		<StContainer>
			<StSelectBox>
				<h1>Select</h1>
				<StSelect>
					<CustomOption value="option1">리액트</CustomOption>
					<CustomOption value="option1">자바</CustomOption>
					<CustomOption value="option1">스프링</CustomOption>
					<CustomOption value="option1">리액트네이티브</CustomOption>
				</StSelect>
			</StSelectBox>
		</StContainer>
	);
}

export default Select;

const StContainer = styled.div`
	margin: 10px;
`;

const StSelectBox = styled.div`
	border: 3px solid rgb(221, 221, 221);
	height: 200px;
	/* overflow: hidden;
	position: relative; */
	margin-top: 50px;
`;

const StSelect = styled.select`
	width: 300px;
	height: 40px;
	padding: 0 28px;
	border: 1px solid rgb(221, 221, 221);
	border-radius: 12px;
	color: black;
`;

const CustomOption = styled.option``;
