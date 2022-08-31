import React, { useEffect, useState, useContext } from "react";
//  COMPONENTS
import Question from "./Question";

// CONTEXTS
import { MainContext } from "./context/MainContext";

export default function Questions(props) {
	const {
		quizStarted,
		setQuizStarted,
		quizQuestions,
		isFinished,
		setIsFinished,
		handleApiRequest,
	} = useContext(MainContext);
	const { score, setScore } = useContext(MainContext);

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
		setIsFinished(true);
	}

	async function handlePlayAgain() {
		setIsFinished(false);
		setScore(0)
		await handleApiRequest();
	}
	return (
		<div className="questions">
			<div className="questions_container">{questionElements}</div>
			<div className="scoreContainer">
				{isFinished && <h1 className="score">You scores {score}/5</h1>}

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
