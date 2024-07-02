import { StatusCodes } from 'http-status-codes';
import { DomainException } from './domain.exception';

export class ValidationException extends DomainException {
  constructor(message: string) {
    super(StatusCodes.BAD_REQUEST, 'Validation Error', message);
  }
}
