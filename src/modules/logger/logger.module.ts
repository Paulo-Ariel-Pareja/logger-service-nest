import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerRepository } from './logger.repository';
import { LoggerService } from './logger.service';
import { LoggerController } from './logger.controller';

@Module({
    imports: [TypeOrmModule.forFeature([LoggerRepository])],
    providers: [LoggerService],
    controllers: [LoggerController]
})
export class LoggerModule {}