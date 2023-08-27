import { ETransactionStatus } from '@prisma/client';
import { IsNotEmpty, IsOptional, IsString, IsMongoId, IsEnum } from 'class-validator';

export class CreateTransactionDto {
  @IsNotEmpty()
  @IsMongoId()
  lenderUserId: string;

  @IsNotEmpty()
  @IsMongoId()
  borrowerUserId: string;

  @IsNotEmpty()
  @IsString()
  lenderUserName: string;

  @IsNotEmpty()
  @IsString()
  borrowerUserName: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsEnum(ETransactionStatus)
  status: ETransactionStatus;

  @IsOptional()
  @IsString()
  categoryId: string;

  @IsOptional()
  @IsString()
  subCategoryId: string;

  @IsOptional()
  @IsString()
  categoryName: string;

  @IsOptional()
  @IsString()
  subCategoryName: string;

  @IsOptional()
  @IsMongoId()
  groupId: string;
}
