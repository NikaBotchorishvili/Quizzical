import React, { useContext } from "react";

import PossibleAnswers from "./PossibleAnswers";

import { MainContext } from "./context/MainContext";

export default function Question(props) {
	const { question, answers, id } = props;
	const questionElement = (
		<div className="question_container">
			<div className="question">
				<h1 dangerouslySetInnerHTML={{ __html: question }} />
			</div>

			<PossibleAnswers key={1} answers={answers} id={id} />
		</div>
	);
	return questionElement;
}
