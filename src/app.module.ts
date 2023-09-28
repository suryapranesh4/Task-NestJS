import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmExModule } from './database/typeorm-ex.module';
import { TaskRepository } from './tasks/task.repository';
import { typeOrmConfig } from './config/typeorm.config';
@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmExModule.forCustomRepository([TaskRepository]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
