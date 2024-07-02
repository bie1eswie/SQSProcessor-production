import { StatusCodes } from "http-status-codes";
import { DomainException } from "../../domain/exceptions/domain.exception";

class InvalidParameterException extends DomainException {
  constructor(message: string) {
    super(StatusCodes.BAD_REQUEST, "invalid_parameter", message);
  }
}

export { InvalidParameterException };
