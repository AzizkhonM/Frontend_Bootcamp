import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './schemas/task.schema';
import { Model } from 'mongoose';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  create(createTaskDto: CreateTaskDto): Promise<Task> {
    return new this.taskModel(createTaskDto).save();
  }

  findAll(): Promise<Task[]> {
    return this.taskModel.find().populate("admin_id").exec();
  }

  findOne(id: string) {
    return this.taskModel.findById(id).populate("admin_id").exec();
  }

  done(id: string){
    return this.taskModel.findByIdAndUpdate(id, { is_done: true }, { new: true }).exec();

  }

  not_done(id: string){
    return this.taskModel.findByIdAndUpdate(id, { is_done: false }, { new: true }).exec(); 
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return this.taskModel.findByIdAndUpdate(id, updateTaskDto, { new: true }).exec();
  }

  remove(id: string) {
    return this.taskModel.findByIdAndDelete(id).exec();
  }
}
