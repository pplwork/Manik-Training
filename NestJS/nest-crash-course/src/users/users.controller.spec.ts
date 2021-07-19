import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  const mockUserService={
    createUser: jest.fn(dto=>{
      return {
        id: Date.now(),
        ...dto
      }
    })
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers:[UsersService]
    }).overrideProvider(UsersService).useValue(mockUserService).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should create a user',()=>{
    expect(controller.createUser({name: 'manik'})).toEqual({
      id: expect.any(Number),
      name: 'manik'
    })
  });
});
