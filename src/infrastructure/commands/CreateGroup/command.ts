import { CreateGroupDto } from "src/dtos";

export class CreateGroupCommand {
  constructor(public readonly group: CreateGroupDto) {}
}
