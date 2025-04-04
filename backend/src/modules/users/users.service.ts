import crypto from 'crypto';

import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(login: string, password: string): Promise<string> {
    const passwordHash = crypto
      .createHash('sha256')
      .update(`${login.toLowerCase()}${password}`)
      .digest('hex');

    const user = await this.prismaService.user.create({
      data: {
        login,
        passwordHash,
      },
    });
    return user.id;
  }

  async getUserTasks(userId: string) {
    return this.prismaService.task.findMany({
      where: { createdById: userId },
    });
  }
}
