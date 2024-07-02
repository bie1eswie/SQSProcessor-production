import { injectable } from "inversify";

@injectable()
export abstract class AbstractSendGridService {
  abstract SendSingleEmail(email: EmailProps): Promise<unknown>;
}
