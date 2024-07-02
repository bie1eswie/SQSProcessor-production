import "reflect-metadata";

import { Container } from "inversify";
import { AbstractSendGridService } from "../interface/send-grid";
import { SendGridService } from "../../infrastructure/services/send-grid.service";
import { SingleEmailUseCase } from "../use-cases/single-email/single-email.usecase";
import { Logger } from "../../domain/logging/logger";
import { Endpoints } from "./endpoints/endpoints";
import { AbstractEndpoints } from "./endpoints/endpoints.abstract";

const container = new Container();
container.bind(Logger).toSelf();
container.bind<AbstractSendGridService>("SendGridService").to(SendGridService);
container.bind<SingleEmailUseCase>("SingleEmailUseCase").to(SingleEmailUseCase);
container.bind<AbstractEndpoints>("Endpoints").to(Endpoints);

export default container;
