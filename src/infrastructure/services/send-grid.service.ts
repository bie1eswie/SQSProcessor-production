import sendgrid from "@sendgrid/mail";

import { AbstractSendGridService } from "../../application/interface/send-grid";
import { injectable } from "inversify";

@injectable()
export class SendGridService extends AbstractSendGridService {
  override SendSingleEmail(emailProps: EmailProps): Promise<unknown> {
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);
    return sendgrid.send(emailProps);
  }
}
