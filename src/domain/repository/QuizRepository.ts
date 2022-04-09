import Quiz from "../entity/Quiz";

export default interface QuizRepository {
	get(idQuiz: number): Promise<Quiz>;
}
