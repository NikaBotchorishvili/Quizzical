import React, { useContext, useState } from "react";
import { MainContext } from "./context/MainContext";
// 	Contexts
export default function StartQuiz(props) {
	const { handleApiRequest } = useContext(MainContext);

	return (
		<div className="start-quiz">
			<h1 className="header">Quizzical</h1>

			<h4 className="page-description">Some description if needed</h4>

			<button className="btn" onClick={handleApiRequest}>
				Start Quiz
			</button>
		</div>
	);
}
