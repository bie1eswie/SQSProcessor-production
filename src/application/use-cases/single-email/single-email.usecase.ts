import { Logger } from "../../../domain/logging/logger";
import { AbstractSendGridService } from "../../interface/send-grid";
import { BaseUseCase } from "../base-usecase";
import { SingleEmailRequest } from "./single-email.request";
import container from "../../configuration/inversify.config";
import { inject, injectable } from "inversify";

@injectable()
export class SingleEmailUseCase extends BaseUseCase<
  SingleEmailRequest,
  unknown
> {
  constructor(
    @inject("SendGridService") private sendGridService: AbstractSendGridService
  ) {
    const logger = container.get<Logger>(Logger);
    super(logger);
  }
  protected performOperation(request: SingleEmailRequest): Promise<unknown> {
    const email: EmailProps = {
      to: request.destination,
      text: request.text,
      html: request.html,
      subject: request.subject,
      from: request.from,
    };
    console.log('email-props'+ JSON.stringify(email))
    return this.sendGridService.SendSingleEmail(email);
  }
}
