import React, { useState } from 'react';
import { styled } from 'styled-components';
import { StBtn, StContainer } from '../ButtonSection/Button';

function Modal() {
	const [firstModal, setFirstModal] = useState(false);
	const [secondModal, setSecondModal] = useState(false);

	const openFirstModal = () => {
		setFirstModal(true);
	};

	const closeFirstModal = () => {
		setFirstModal(false);
	};

	const openSecondModal = () => {
		setSecondModal(true);
	};

	const closeSecondModal = () => {
		setSecondModal(false);
	};

	return (
		<StContainer>
			<h1>Modal</h1>
			<StModalBox>
				<StBtn bgColor={'green'} onClick={openFirstModal}>
					open modal
				</StBtn>
				<StBtn bgColor={'pink'} type="large" onClick={openSecondModal}>
					open modal
				</StBtn>
			</StModalBox>

			{firstModal && (
				<StModalsContainer>
					<StFirstModal>
						닫기와 확인 버튼 2개가 있고,
						<br />
						외부 영역을 눌러도 모달이 닫히지 않아요.
						<ButtonBox>
							<StBtn bgColor={'pink'} onClick={closeFirstModal}>
								닫기
							</StBtn>
							<StBtn bgColor={'green'}>확인</StBtn>
						</ButtonBox>
					</StFirstModal>
				</StModalsContainer>
			)}

			{secondModal && (
				<StModalsContainer onClick={closeSecondModal}>
					<StSecondModal onClick={e => e.stopPropagation()}>
						<p>
							닫기 버튼 1개가 있고,
							<br />
							외부 영역을 누르면 모달이 닫혀요.
						</p>
						<StCloseBtn onClick={closeSecondModal}>❌</StCloseBtn>
					</StSecondModal>
				</StModalsContainer>
			)}
		</StContainer>
	);
}

export default Modal;

const StModalsContainer = styled.div`
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.8);
`;

const StModalBox = styled.div`
	display: flex;
	gap: 12px;
`;

const StFirstModal = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	background-color: white;
	border-radius: 8px;
	width: 500px;
	height: 300px;
`;

const ButtonBox = styled.div`
	display: flex;
	position: relative;
	top: 20px;
	left: 100px;
	gap: 20px;
`;

const StSecondModal = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: baseline;
	width: 300px;
	height: 200px;
	border-radius: 8px;
	background-color: white;
`;

const StCloseBtn = styled.button`
	border: 1px solid rgb(221, 221, 221);
	width: 40px;
	height: 40px;
	border-radius: 100%;
	cursor: pointer;
	&:hover {
		border: 1px solid black;
	}
`;
