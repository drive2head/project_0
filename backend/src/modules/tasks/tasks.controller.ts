import { Controller, Post, Query } from '@nestjs/common';

import { CreateTaskRequestDto } from './dto/exchange';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async createTask(@Query() query: CreateTaskRequestDto): Promise<string> {
    return this.tasksService.createTask(query.title, query.createdById);
  }
}
