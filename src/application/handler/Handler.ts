import DomainEvent from "../../domain/event/DomainEvent";

export default interface Handler {
	eventName: string;
	handle(event: DomainEvent): Promise<void>;
}
