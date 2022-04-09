import Quiz from "../../domain/entity/Quiz";
import QuizRepository from "../../domain/repository/QuizRepository";

export default class QuizRepositoryMemory implements QuizRepository {
	quizzes: Quiz[];

	constructor () {
		this.quizzes = [
			{
				idQuiz: 1,
				questions: [
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
				]
			}
		];
	}

	async get(idQuiz: number): Promise<Quiz> {
		const quiz = this.quizzes.find(quiz => quiz.idQuiz === idQuiz);
		if (!quiz) throw new Error("Quiz not found");
		return quiz;
	}
}
