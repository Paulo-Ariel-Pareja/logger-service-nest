import { EntityRepository, Repository } from "typeorm";
import { Logger } from './logger.entity';

@EntityRepository(Logger)
export class LoggerRepository extends Repository<Logger>{ }