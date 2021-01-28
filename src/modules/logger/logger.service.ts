import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggerRepository } from './logger.repository';
import { plainToClass } from 'class-transformer';
import { LoggerDto } from './logger.dto';
import { Logger } from './logger.entity';

@Injectable()
export class LoggerService {
    constructor(
        @InjectRepository(LoggerRepository)
        private readonly _loggerRepository: LoggerRepository
    ) { }

    async get(ID: number): Promise<LoggerDto> {
        if (!ID) {
            throw new BadRequestException('id must be send');
        }
        const log: Logger = await this._loggerRepository.findOne(ID);

        if (!log) {
            throw new NotFoundException();
        }

        return plainToClass(LoggerDto, log);
    }

    async getAllByUser(user: string, take: number = 20, skip: number = 0): Promise<any> {
        if (!user) {
            throw new BadRequestException('user must be send');
        }

        const [result, total] = await this._loggerRepository.findAndCount({
            where: { user }, order: { createdAt: "DESC" },
            take: take,
            skip: skip
        });

        return {
            result,
            count: total
        }
    }

    async create(log: Partial<LoggerDto>): Promise<LoggerDto> {
        const newLog: LoggerDto = await this._loggerRepository.save(log);

        return plainToClass(LoggerDto, newLog);
    }
}
