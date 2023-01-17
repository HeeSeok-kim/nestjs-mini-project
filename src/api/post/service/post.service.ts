import { Injectable, Inject } from '@nestjs/common';
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import { PostRepository } from 'src/db/repository/PostRepository';
import { AwsS3Service } from '../../../common/util/asw.s3.service';

@Injectable()
export class PostService {
  constructor(
    private postRepository: PostRepository,
    private awsS3Service: AwsS3Service,
  ) {}

  async create(req: CreatePostDto, files: Array<Express.Multer.File>) {
    const imageData = await this.awsS3Service.uploadFileToS3(files);

    return 'This action adds a new post';
  }

  async findAll() {
    return this.postRepository.findAllPosts();
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
