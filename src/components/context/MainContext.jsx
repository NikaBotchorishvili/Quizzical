import { createContext, useState } from "react";

export const MainContext = createContext({});

export default function MainContextProvider({ children }) {
	const [quizQuestions, setQuizQuestions] = useState(null);
	const [score, setScore] = useState(0);
	const [quizStarted, setQuizStarted] = useState(false);
	const [isFinished, setIsFinished] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	
	async function handleApiRequest() {
		setIsLoading(true);
		try {
			let response = await fetch(
				"https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple"
			);

			const data = await response.json();
			const results = data.results;

			const questions = results.map((result, id) => {
				return {
					id: id,
					question: result.question,
					answers: [
						...result.incorrect_answers.map((incorrect_answer, id) => {
							return {
								id: id,
								answer: incorrect_answer,
								selected: false,
								correct: false,
							};
						}),
						{
							id: -1,
							answer: result.correct_answer,
							selected: false,
							correct: true,
						},
					].sort((a, b) => 0.5 - Math.random()),
				};
			});
			setQuizQuestions(questions);
			setQuizStarted(true);

			setIsLoading(false);
		} catch (err) {
			console.log(err);
		}
	}

	const context = {
		quizQuestions: quizQuestions,
		setQuizQuestions: setQuizQuestions,

		score: score,
		setScore: setScore,

		quizStarted: quizStarted,
		setQuizStarted: setQuizStarted,

		isFinished: isFinished,
		setIsFinished: setIsFinished,

		isLoading: isLoading,
		setIsLoading: isLoading,

		handleApiRequest: handleApiRequest,
	};
	return (
		<MainContext.Provider value={context}>{children}</MainContext.Provider>
	);
}
