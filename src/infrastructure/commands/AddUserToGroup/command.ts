export class AddUserToGroupCommand {
  constructor(public readonly userId: string,public readonly groupId: string) {}
}
