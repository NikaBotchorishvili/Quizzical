import React, { useContext, useState, useEffect } from "react";

//  COMPONENTS
import PossibleAnswer from "./PossibleAnswer";
export default function PossibleAnswers(props) {
	const { answers, id } = props;
	const answerElements = answers.map((answer, idx) => {
		return (
			<PossibleAnswer
				answer={answer.answer}
				correct={answer.correct}
				key={idx}
				answer_id={answer.id}
				question_id={id}
				selected={answer.selected}
			/>
		);
	});
	return <div className="possible-answers">{answerElements}</div>;
}
