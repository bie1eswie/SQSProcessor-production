export abstract class AbstractEndpoints {
  messageData!: IMessageDataEndpoints;
  constructor() {}
}
export interface IMessageDataEndpoints {
  updateMessageRequest(): string;
}
