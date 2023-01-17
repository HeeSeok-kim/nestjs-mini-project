import { Injectable, Inject } from '@nestjs/common';
import { Users } from 'src/db/models/users.model';

@Injectable()
export class UserRepository {
  constructor(@Inject('USER_REPOSITORY') private userModel: typeof Users) {}

  async signUp(posts: Partial<Users>) {
    return await this.userModel.create(posts);
  }

  async findOne(findData: object): Promise<Users | null> {
    return this.userModel.findOne({
      raw: true,
      where: { ...findData },
    });
  }

  async findAllPosts(): Promise<Users[]> {
    return await this.userModel.findAll({});
  }
}
