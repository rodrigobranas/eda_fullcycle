import Quiz from "../src/domain/entity/Quiz";

test("Deve criar um quiz", function () {
	const questions = [
		{ 
			id: 1, 
			description: "JavaScript é legal?", 
			answers: [
				{ id: "a", description: "Sim" },
				{ id: "b", description: "Não" }
			],
			correctAnswer: "a"
		},
		{ 
			id: 2, 
			description: "TypeScript é melhor que JavaScript?", 
			answers: [
				{ id: "a", description: "Sim" },
				{ id: "b", description: "Não" }
			],
			correctAnswer: "a"
		}
	];
	const quiz = new Quiz(1, questions);
	expect(quiz.idQuiz).toBe(1);
	expect(quiz.questions[0].id).toBe(1);
	expect(quiz.questions).toHaveLength(2);
});
