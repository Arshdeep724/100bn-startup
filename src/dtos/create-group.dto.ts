import { IsNotEmpty, IsString, IsMongoId } from 'class-validator';

export class CreateGroupDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsMongoId()
  createdByUserId: string;
}
