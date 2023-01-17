import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { GlobalResponseInterceptor } from '../../../common/interceptors/global.response.interceptor';

@Controller('user')
@UseInterceptors(GlobalResponseInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  signUp(@Body() req: CreateUserDto) {
    return this.userService.signUp(req);
  }
}
