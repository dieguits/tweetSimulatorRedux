import React from "react";
import { Modal as ModalB } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { openCloseAddTweetModalAction } from "../actions/modalsActions";

export default function Modal(props) {
	const { children } = props;

	//dispatch to execute our actions
	const dispatch = useDispatch();
	const closeModal = (state) => dispatch(openCloseAddTweetModalAction(state));

	// useSelector to get the storage value
	const isOpenModal = useSelector((state) => state.modals.stateModalAddTweet);

	return (
		<ModalB show={isOpenModal} size="lg" onHide={() => closeModal(false)} centered>
			{children}
		</ModalB>
	);
}