import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CatsService } from './cats.service';
import { Cat } from './entities/cat.entity';

describe('CatsService', () => {
  let service: CatsService;
  const mockCatsRepo={
    create: jest.fn().mockImplementation(dto=>dto),
    save: jest.fn().mockImplementation(cat=> Promise.resolve({id:Date.now(),...cat}))
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService,{
        provide: getRepositoryToken(Cat),
        useValue:mockCatsRepo
      }],
    }).compile();

    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
