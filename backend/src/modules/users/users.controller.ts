import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UsersService } from './users.service';
import { CreateUserRequestDto } from './dto/exchange';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Query() query: CreateUserRequestDto): Promise<string> {
    return this.usersService.createUser(query.login, query.password);
  }

  @Get(':userId/tasks')
  async getUserTasks(@Param('userId') userId: string) {
    return this.usersService.getUserTasks(userId);
  }
}
