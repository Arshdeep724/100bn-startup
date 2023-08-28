import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AddUserToGroupCommand } from './command';
import { RootRepository } from '../../../repositories/root.repository';

@CommandHandler(AddUserToGroupCommand)
export class AddUserToGroupCommandHandler
  implements ICommandHandler<AddUserToGroupCommand>
{
  constructor(private readonly rootRepository: RootRepository) {}

  async execute(command: AddUserToGroupCommand) {
    const { groupId,userId } = command;
    await this.rootRepository.addUserToGroup(userId,groupId);
  }
}
