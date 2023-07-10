import React from 'react';
import { styled } from 'styled-components';

function OptionVisible({
	isSelectBoxOneVisible,
	StSelectBoxChild,
	languageList,
	StSelectBoxParent,
	handleFirstLanguageClick,
}) {
	return (
		<StOptionsVisible>
			{isSelectBoxOneVisible && (
				<StSelectBoxParent>
					{languageList.map(item => (
						<StSelectBoxChild key={item} onClick={handleFirstLanguageClick}>
							{item}
						</StSelectBoxChild>
					))}
				</StSelectBoxParent>
			)}
		</StOptionsVisible>
	);
}

export default OptionVisible;

const StOptionsVisible = styled.div`
	position: absolute;
	top: 680px;
	left: 10px;
`;
