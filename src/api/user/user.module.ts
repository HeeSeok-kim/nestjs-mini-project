import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { UserRepository } from '../../db/repository/UserRepository';
import { userProviders } from './user.providers';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository, ...userProviders],
})
export class UserModule {}
