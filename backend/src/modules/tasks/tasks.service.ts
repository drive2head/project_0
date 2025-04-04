import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private readonly prismaService: PrismaService) {}

  async createTask(title: string, createdById: string): Promise<string> {
    const task = await this.prismaService.task.create({
      data: {
        title,
        createdById,
      },
    });
    return task.id;
  }
}
