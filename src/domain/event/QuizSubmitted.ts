import DomainEvent from "./DomainEvent";

export default class QuizSubmitted implements DomainEvent {
	name = "QuizSubmitted";

	constructor (readonly idQuiz: number, readonly userName: string, readonly email: string, readonly answers: { [id: number]: string}) {
	}
}