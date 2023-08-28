import { Body, Controller, Param, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateGroupDto, CreateTransactionDto, CreateUserDto } from 'src/dtos';
import {
    AddUserToGroupCommand,
  CreateGroupCommand,
  CreateTransactionCommand,
  CreateUserCommand,
} from 'src/infrastructure/commands';
import { RootRepository } from 'src/repositories/root.repository';

@Controller('root')
export class RootController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly repo: RootRepository,
  ) {}

  @Post('signup')
  async createNewUser(@Body() user: CreateUserDto) {
    return this.commandBus.execute<CreateUserCommand>(
      new CreateUserCommand(user),
    );
  }

  @Post('group')
  async createNewGroup(@Body() group: CreateGroupDto) {
    return this.commandBus.execute<CreateGroupCommand>(
      new CreateGroupCommand(group),
    );
  }

  @Post('group/transaction')
  async createNewTransaction(@Body() transaction: CreateTransactionDto) {
    return this.commandBus.execute<CreateTransactionCommand>(
      new CreateTransactionCommand(transaction),
    );
  }

  @Post('group/:groupId/add/:userId ')
  async addUserToGroup(@Param('groupId') groupId: string,@Param('userId') userId: string) {
    return this.commandBus.execute<AddUserToGroupCommand>(
      new AddUserToGroupCommand(userId,groupId),
    );
  }

  /**
   * FOR DEV (Arshdeep Singh) ONLY
   */
  @Post('test')
  async testFn() {
    return this.repo.deleteAll()
  }
}
