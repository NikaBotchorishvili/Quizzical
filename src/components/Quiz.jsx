import React from "react";

// Components
import StartQuiz from "./StartQuiz";

//Imaes
import topBlob from "../assets/images/top-blob.png";
import bottomBlob from "../assets/images/bottom-blob.png";
import Questions from "./Questions";

export default function Quiz(props) {
	const { quizStarted, setQuizStarted } = props;

	return (
		<div className="container">
			<div className="top">
				<img src={topBlob} />
			</div>

			<div className="middle">
				{!quizStarted ? (
					<StartQuiz
						setQuizStarted={setQuizStarted}
					/>
				) : (
					<Questions />
				)}
			</div>

			<div className="bottom">
				<img src={bottomBlob} />
			</div>
		</div>
	);
}
