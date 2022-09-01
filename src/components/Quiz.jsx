import React, { useContext } from "react";
// 	Components
import StartQuiz from "./StartQuiz";
import Questions from "./Questions";

//	Contexts

import { MainContext } from "./context/MainContext";

//Images
import topBlob from "../assets/images/top-blob.png";
import bottomBlob from "../assets/images/bottom-blob.png";

export default function Quiz(props) {
	const { quizStarted } = useContext(MainContext);

	return (
		<div className="container">
			<div className="top">
				<img src={topBlob} />
			</div>

			<div className="middle">
				{!quizStarted ? <StartQuiz /> : <Questions />}
			</div>

			<div className="bottom">
				<img src={bottomBlob} />
			</div>
		</div>
	);
}
