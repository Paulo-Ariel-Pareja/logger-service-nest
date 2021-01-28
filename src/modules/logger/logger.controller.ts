import {
    Controller,
    Param,
    Body,
    ParseIntPipe,
    Get,
    Post,
    Query,
} from '@nestjs/common';
import { LoggerService } from './logger.service';
import { LoggerDto } from './logger.dto';

@Controller('logger')
export class LoggerController {
    constructor(
        private readonly _loggerService: LoggerService
    ) { }

    @Get('log/:id')
    getById(@Param('id', ParseIntPipe) id: number): Promise<LoggerDto> {
        return this._loggerService.get(id)
    }

    @Get('find/:user')
    getAllByUser(@Param('user') user, @Query() query): Promise<LoggerDto> {
        const {take, skip} = query;
        return this._loggerService.getAllByUser(user, take, skip)
    }

    @Post('log')
    create(@Body() log: Partial<LoggerDto>): Promise<LoggerDto> {
        return this._loggerService.create(log)
    }
}
