import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../../ormconfig';
import { Cat } from './entities/cat.entity';
@Module({
  imports: [TypeOrmModule.forRoot(config),TypeOrmModule.forFeature([Cat])],
  controllers: [CatsController],
  providers: [CatsService]
})
export class CatsModule {}
