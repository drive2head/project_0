import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { TasksModule } from './modules/tasks/tasks.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [TasksModule, UsersModule],
  controllers: [AppController],
})
export class AppModule {}
