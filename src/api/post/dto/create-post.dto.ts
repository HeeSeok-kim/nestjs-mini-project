import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty({ message: '제목을 입력해 주세요' })
  @IsString({ message: '제목은 문자열 형식 입니다.' })
  @MaxLength(255, { message: '제목은 최대 255글자입니다' })
  title: string;

  @IsNotEmpty({ message: '본문을 입력해 주세요' })
  @IsString({ message: '본문은 문자열 형식이여야 합니다' })
  @MaxLength(1000, { message: '본문은 최대 1000글자 입니다.' })
  description: string;
}
