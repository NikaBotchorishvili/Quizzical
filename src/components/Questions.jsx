import React, { useEffect, useState, useContext } from "react";
//  COMPONENTS
import Question from "./Question";

// CONTEXTS
import { MainContext } from "./context/MainContext";

export default function Questions(props) {
	const {
		quizStarted,
		quizQuestions,
		isFinished,
		setIsFinished,
		handleApiRequest,
	} = useContext(MainContext);
	const { score, setScore } = useContext(MainContext);

	const [errors, setErrors] = useState({});
	const questionElements = quizQuestions.map((question, idx) => {
		return (
			<Question
				question={question.question}
				answers={question.answers}
				key={idx}
				id={question.id}
			/>
		);
	});
	function handleCheckAnswers() {
		let selected = 0;

		const selectedValidator = quizQuestions.map((question) => {
			return question.answers.map((answer) => {
				if (answer.selected) {
					selected++;
				}
			});
		});
		if (selected == 5) {
			setIsFinished(true);
		} else {
			setErrors((prevErrors) => {
				return {
					...prevErrors,
					selectionError: `Selection Error: ${5 - selected}/5 is not selected`,
				};
			});
		}
	}
	function handlePlayAgain() {
		setIsFinished(false);
		setScore(0);
		handleApiRequest();
	}

	return (
		<div className="questions">
			<div className="questions_container">{questionElements}</div>
			{errors.selectionError && (
				<h3 className="error">{errors.selectionError} </h3>
			)}
			<div className="scoreContainer">
				{isFinished && <h1 className="score">You scored {score}/5</h1>}
				{quizStarted && !isFinished ? (
					<button onClick={handleCheckAnswers} className="btn">
						Check Answers
					</button>
				) : (
					<button onClick={handlePlayAgain} className="btn">
						Play Again
					</button>
				)}
			</div>
		</div>
	);
}
