import { inject } from "inversify";
import { AbstractMessagingService } from "../../application/interface/messaging-service.abstract";
import { MassageData } from "../../domain/entities/message-data";
import axios, { AxiosResponse } from "axios";
import { AbstractEndpoints } from "../../application/configuration/endpoints/endpoints.abstract";

export class MessagingDataService extends AbstractMessagingService {
  constructor(@inject("Endpoints") private endPoints: AbstractEndpoints) {
    super();
  }
  SendMessageTrackingData(messageData: MassageData): Promise<AxiosResponse> {
    return axios.post(
      this.endPoints.messageData.updateMessageRequest(),
      messageData
    );
  }
}
