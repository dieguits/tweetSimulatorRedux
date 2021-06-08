import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { validationFormAddTweetAction } from "../actions/validationActions";
import { addTweetAction } from "../actions/tweetsActions";
import { openCloseAddTweetModalAction } from "../actions/modalsActions";
import { v4 as uuid } from "uuid";
import moment from "moment";

export default function FormAddTweet() {
	const [formValue, setFormValue] = useState({
		name: "",
		tweet: "",
	});

	// Init the dispatch
	const dispatch = useDispatch();
	const errorForm = (state) => dispatch(validationFormAddTweetAction(state));
	const addTweet = (state) => dispatch(addTweetAction(state));
	const closeModal = (state) => dispatch(openCloseAddTweetModalAction(state));

	//get validation state
	const errorFormValue = useSelector((state) => state.validations.errorFormAddTweet);

	const onChange = (e) => {
		setFormValue({
			...formValue,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const { name, tweet } = formValue;

		if (!name || !tweet) {
			errorForm(true);
		} else {
			errorForm(false);
			addTweet({
				id: uuid(),
				name,
				tweet,
				date: moment(),
			});
			closeModal(false);
		}
	};

	return (
		<Form className="m-3" onChange={onChange} onSubmit={onSubmit}>
			<Form.Group className="text-center">
				<h1>New Tweet</h1>
			</Form.Group>
			<Form.Group className="my-3">
				<Form.Control type="text" name="name" placeholder="Type your name" />
			</Form.Group>
			<Form.Group className="my-3">
				<Form.Control as="textarea" name="tweet" row="3" placeholder="Write your tweet" />
			</Form.Group>
			<Button varian="primary" type="submit">
				Send Tweet
			</Button>

			{errorFormValue && (
				<Alert variant="danger" className="mt-4">
					All Fields are mandatory!
				</Alert>
			)}
		</Form>
	);
}
