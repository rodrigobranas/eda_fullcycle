import QuizSubmitted from "../../domain/event/QuizSubmitted";
import Mediator from "../../infra/mediator/Mediator";

export default class SubmitQuiz {

	constructor (readonly mediator: Mediator) {
	}

	async execute (input: Input): Promise<void> {
		const event = new QuizSubmitted(input.idQuiz, input.name, input.email, input.answers);
		this.mediator.publish(event);
	}
}

type Input = {
	idQuiz: number,
	name: string,
	email: string,
	answers: { [id: number]: string }
}
