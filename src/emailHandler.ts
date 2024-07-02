import type {
  Context,
  APIGatewayProxyStructuredResultV2,
  Handler,
  SQSEvent,
} from "aws-lambda";
import { SQSEventHelper } from "./application/helpers/sqs-event.helper";
import { json } from "stream/consumers";

export const handler: Handler = async (
  _event: SQSEvent,
  _context: Context
): Promise<APIGatewayProxyStructuredResultV2> => {
  console.log(JSON.stringify(_event.Records));
  const sqsHelper = new SQSEventHelper();
  
  const res = await sqsHelper.SendSingleEmailRequest(_event);
  return {
    statusCode: 200,
    body: JSON.stringify(res),
  };
};
