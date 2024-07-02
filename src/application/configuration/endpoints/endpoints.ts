import { injectable } from "inversify";
import { AbstractEndpoints, IMessageDataEndpoints } from "./endpoints.abstract";

@injectable()
export class Endpoints implements AbstractEndpoints {
  constructor() {}
  messageData: IMessageDataEndpoints = {
    updateMessageRequest: (): string => {
      return `${process.env.MESSAGE_DATA_API}/api/`;
    },
  };
}
