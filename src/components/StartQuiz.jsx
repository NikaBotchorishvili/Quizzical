import React from "react";

export default function StartQuiz(props) {
    const {setQuizStarted} = props
    function handleClick() {
		setQuizStarted(true);
	}

	return (
		<div className="start-quiz">
			<h1 className="header">Quizzical</h1>

			<h4 className="page-description">Some description if needed</h4>

			<button className="btn" onClick={handleClick}>
				Start Quiz
			</button>
		</div>
	);
}
