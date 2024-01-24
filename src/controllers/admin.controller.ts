import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  Query,
  Get,
} from '@nestjs/common';
import { RootRepository } from 'src/repositories/root.repository';

@Controller('admin')
export class AdminController {
  constructor(private readonly repo: RootRepository) {}

  
  @Get('user')
  async getAllUsers() {
    return this.repo.testt();
  }

  @Get('group')
  async getAllGroups() {
    return this.repo.testt();
  }

  @Get('transaction')
  async getAllTransactions(@Query('q') query: string) {
    return this.repo.testt();
  }

  @Delete('test')
  async deleteAllData(@Query('q') query: string) {
    console.log(query);
    // return this.repo.testt();
  }
}
