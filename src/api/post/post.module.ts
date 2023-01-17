import { Module } from '@nestjs/common';
import { PostService } from './service/post.service';
import { PostController } from './controller/post.controller';
import { DatabaseModule } from '../../db/database.module';
import { postsProviders } from './post.providers';
import { PostRepository } from '../../db/repository/PostRepository';
import { AwsS3Service } from '../../common/util/asw.s3.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PostController],
  providers: [PostService, PostRepository, ...postsProviders, AwsS3Service],
})
export class PostModule {}
