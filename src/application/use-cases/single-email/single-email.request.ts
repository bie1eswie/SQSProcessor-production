import { validationPipe } from "../../../domain/validation/validate-body.middleware";
import { UseCaseRequest } from "../usecase.request";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SingleEmailRequest extends UseCaseRequest {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  destination: string;
  @IsString()
  from: string;
  @IsString()
  @IsNotEmpty()
  subject: string;
  @IsString()
  @IsNotEmpty()
  text: string;
  html: string;
  protected async validatePayload(): Promise<void> {
    await validationPipe(SingleEmailRequest, this);
  }

  constructor(
    _to: string,
    _from: string,
    _subject: string,
    _text: string,
    _html: string
  ) {
    super();
    this.from = _from;
    this.html = _html;
    this.subject = _subject;
    this.text = _text;
    this.destination = _to;
  }
}
