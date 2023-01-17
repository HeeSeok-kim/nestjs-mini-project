import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserRepository } from '../../../db/repository/UserRepository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async signUp(req: CreateUserDto) {
    req.password = await bcrypt.hash(
      req.password,
      parseInt(process.env.saltOrRounds),
    );
    const { login_id, password, nickname } = req;

    const findId = await this.userRepository.findOne({ login_id: login_id });
    if (findId) {
      throw new BadRequestException('중복되는 아이디가 존재합니다.');
    }

    const findNickName = await this.userRepository.findOne({
      nickName: nickname,
    });

    if (findNickName) {
      throw new BadRequestException('중복되는 닉네임 입니다.');
    }

    const result = await this.userRepository.signUp({
      login_id,
      password,
      nickname,
    });
    if (result) {
      return `${result.login_id} 회원 가입 되었습니다.`;
    }
  }
}
