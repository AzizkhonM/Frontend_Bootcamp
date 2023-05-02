import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Vazifalar ustida amallar")
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @ApiOperation({ summary: "Vazifa qo'shish" })
  @Post("add")
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @ApiOperation({ summary: "Vazifani bajarilgan qilib belgilash" })
  @Post("done/:id")
  done(@Param("id") id: string) {
    return this.taskService.done(id)
  }

  @ApiOperation({ summary: "Vazifani bajarilmagan qilib belgilash" })
  @Post("not_done/:id")
  not_done(@Param("id") id: string) {
    return this.taskService.not_done(id)
  }

  @ApiOperation({ summary: "Barcha vazifalarni ko'rish" })
  @Get("all")
  findAll() {
    return this.taskService.findAll();
  }

  @ApiOperation({ summary: "Vazifalarni ID si bo'yicha ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @ApiOperation({ summary: "Vazifani tahrirlash" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(id, updateTaskDto);
  }

  @ApiOperation({ summary: "Vazifani o'chirib tashlash" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(id);
  }
}
