import { ClassConstructor, plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { ValidationException } from "../../domain/exceptions/validation-exception";
import { UseCaseRequest } from "../../application/use-cases/usecase.request";
export * from "class-validator";

export const validationPipe = async (
  schema: ClassConstructor<UseCaseRequest>,
  requestObject: object
) => {
  const transformedClass: UseCaseRequest = plainToInstance(
    schema,
    requestObject
  );
  const errors = await validate(transformedClass);
  if (errors.length > 0) {
    const errorMessages = errors
      .map((error) => Object.values(error.constraints!))
      .flat();
    throw new ValidationException(errorMessages.join(", "));
  }
  return true;
};
