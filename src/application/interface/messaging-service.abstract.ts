import { injectable } from "inversify";
import { MassageData } from "../../domain/entities/message-data";

@injectable()
export abstract class AbstractMessagingService {
  abstract SendMessageTrackingData(messageData: MassageData);
}
