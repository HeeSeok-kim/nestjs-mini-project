import { Injectable, Inject } from '@nestjs/common';
import { Posts } from 'src/db/models/posts.model';
import { Users } from 'src/db/models/users.model';
import { AwsS3Service } from '../../common/util/asw.s3.service';

@Injectable()
export class PostRepository {
  constructor(@Inject('POST_REPOSITORY') private postModel: typeof Posts) {}

  async createPost(posts: Partial<Posts>) {
    return await this.postModel.create(posts);
  }

  async findAllPosts(): Promise<Posts[]> {
    return await this.postModel.findAll({
      include: [
        {
          model: Users,
        },
      ],
    });
  }
}
