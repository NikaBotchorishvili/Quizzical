import React, { useState, useContext } from "react";
import { MainContext } from "./context/MainContext";

export default function PossibleAnswer(props) {
	const { answer, correct, question_id, answer_id, selected } = props;
	const { setScore, setQuizQuestions, isFinished } = useContext(MainContext);

	function handleClick() {
		setQuizQuestions((prevQuizQuestions) => {
			const newQuizQuestions = prevQuizQuestions.map((quizQuestion) => {
				if (question_id == quizQuestion.id) {
					return {
						...quizQuestion,
						answers: quizQuestion.answers.map((answer) => {
							if (answer_id == answer.id) {
								return { ...answer, selected: !answer.selected };
							} else {
								return { ...answer, selected: false };
							}
						}),
					};
				} else {
					return quizQuestion;
				}
			});
			return newQuizQuestions;
		});

		if (correct && !selected) {
			setScore((prevScore) => prevScore + 1);
		}

		if (correct && selected) {
			setScore((prevScore) => prevScore - 1);
		}
	}

	let finishedBtnStyles = {};

	if (correct) {
		finishedBtnStyles = {
			backgroundColor: "#94D7A2",
		};
	}else if(!correct && selected){
        finishedBtnStyles = {
            backgroundColor: "#F8BCBC",
        }
    }else if(!correct && !selected) {
        finishedBtnStyles = {
            border: "1px solid #4D5B9E"
        }
    }
	const btnStyle = !isFinished
		? {
				border: selected ? "none" : "1px solid #4D5B9E",
				backgroundColor: selected ? "#D6DBF5" : "",
		  }
		: {
            border: "none",

                ...finishedBtnStyles,

		  };

	return (
		<button style={btnStyle} onClick={handleClick} className="answer">
			{answer}
		</button>
	);
}
