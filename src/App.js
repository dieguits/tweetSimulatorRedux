import React from "react";
import { Container } from "react-bootstrap";
import Menu from "./components/Menu";
import Modal from "./components/Modal";
// import FormaAddTweet from "./components/FormAddTweet";
import TweetList from "./components/TweetList";
//Redux
import store from "./store";
import { Provider } from "react-redux";
import FormAddTweet from "./components/FormAddTweet";

export default function App() {
	return (
		<Provider store={store}>
			<Menu />
			<Container className="mt-5">
				<h1 className="text-center">Tweets</h1>
				<div>
					<TweetList />
				</div>
			</Container>
			<Modal>
				<FormAddTweet />
			</Modal>
		</Provider>
	);
}
