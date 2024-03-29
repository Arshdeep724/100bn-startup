import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RootController, AdminController } from 'src/controllers';
import { RootRepository, AdminRepository } from 'src/repositories';
import { PrismaService } from 'src/db/prisma.service';
import {
  AddUserToGroupCommandHandler,
  CreateGroupCommandHandler,
  CreateTransactionCommandHandler,
  CreateUserCommandHandler,
} from 'src/infrastructure/commands';
import { CqrsModule } from '@nestjs/cqrs';
import { ConfigModule } from '@nestjs/config';

const controllers = [RootController, AdminController];
const queryHandlers = [];
const commandHandlers = [
  AddUserToGroupCommandHandler,
  CreateGroupCommandHandler,
  CreateTransactionCommandHandler,
  CreateUserCommandHandler,
];

@Module({
  imports: [CqrsModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController, ...controllers],
  providers: [
    AppService,
    RootRepository,
    AdminRepository,
    PrismaService,
    ...queryHandlers,
    ...commandHandlers,
  ],
})
export class AppModule {}
