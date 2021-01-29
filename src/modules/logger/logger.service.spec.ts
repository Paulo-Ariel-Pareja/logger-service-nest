import { Test, TestingModule } from '@nestjs/testing';
import { LoggerService } from './logger.service';
import { LoggerDto } from './logger.dto';
class LoggerRepositoryMock {
  async get(id: number) {
    return {
      id: 2,
      rawData: "prueba 1",
      action: "accion 2",
      user: "usuario1",
      createdAt: "2021-01-28T06:11:14.103Z",
      updatedAt: "2021-01-28T06:11:14.103Z"
    };
  }
  async getAllByUser(user: string, take: number = 20, skip: number = 0) {
    return {
      result: [
        {
          id: 10,
          rawData: "prueba 9",
          action: "accion 9",
          user: "usuario1",
          createdAt: "2021-01-28T06:20:57.385Z",
          updatedAt: "2021-01-28T06:20:57.385Z"
        },
        {
          id: 9,
          rawData: "prueba 5",
          action: "accion 5",
          user: "usuario1",
          createdAt: "2021-01-28T06:11:39.626Z",
          updatedAt: "2021-01-28T06:11:39.626Z"
        }
      ],
      count: 6
    }
  }
  async create(log: Partial<LoggerDto>) {
    return {
      id: 123,
      rawData: "prueba 1",
      action: "accion 2",
      user: "usuario1",
      createdAt: "2021-01-28T06:11:14.103Z",
      updatedAt: "2021-01-28T06:11:14.103Z"
    };
  }
}

describe('LoggerService', () => {
  let app: TestingModule;
  let loggerService: LoggerService;

  beforeEach(async () => {
    const ApiServiceProvider = {
      provide: LoggerService,
      useClass: LoggerRepositoryMock,
    };
    app = await Test.createTestingModule({
      providers: [LoggerService, ApiServiceProvider],
    }).compile();

    loggerService = app.get<LoggerService>(LoggerService);
  });

  it('get', async () => {
    const resp = await loggerService.get(2)

    expect(resp.id).toEqual(2);
  });

  it('getAllByUser', async () => {
    const resp = await loggerService.getAllByUser('hola')

    expect(resp.result.length).toEqual(2);
  });

  it('create', async () => {
    const input = {
      rawData: "prueba 9",
      action: "accion 9",
      user: "usuario1"
    }
    const resp = await loggerService.create(input)

    expect(resp.id).toEqual(123);
  });
});
