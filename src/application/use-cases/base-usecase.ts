import { performance } from "node:perf_hooks";
import { Logger } from "../../domain/logging/logger";
import { UseCaseRequest } from "./usecase.request";
import { inject, injectable } from "inversify";

@injectable()
abstract class BaseUseCase<IRequest extends UseCaseRequest, IResponse> {
  constructor(@inject(Logger) private logger: Logger) {}

  public async execute(request: IRequest): Promise<IResponse> {
    try {
      const startTime = performance.now();
      request.validate();
      const response = await this.performOperation(request);
      const endTime = performance.now();
      const useCaseExecutionTime = endTime - startTime;
      this.logger.info(
        `${this.constructor.name}.execute(${request}) took +${useCaseExecutionTime} ms to execute!`
      );
      return response;
    } catch (error) {
      this.logger.error(
        `[@UseCase] ${this.constructor.name}.execute(${request}) threw the following error! --- ${error}`
      );
      throw error;
    }
  }

  protected abstract performOperation(request: IRequest): Promise<IResponse>;
}

export { BaseUseCase };
