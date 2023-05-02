import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { JwtModule } from '@nestjs/jwt';
import { Task, TaskSchema } from './schemas/task.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name: Task.name, schema: TaskSchema}]), JwtModule.register({})],
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule {}
