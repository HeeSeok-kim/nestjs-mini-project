import {
  Table,
  Column,
  Model,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
  HasMany,
  AllowNull,
  Unique,
  AutoIncrement,
} from 'sequelize-typescript';
import { Like } from './like.models';
import { Feed } from './post';
import { Comment } from './comment.models';
import { Pick } from './pick.models';

@Table({
  modelName: 'User',
  tableName: 'users',
  freezeTableName: false,
  timestamps: true,
})
export class User extends Model {
  //HasMany

  @HasMany(() => Like)
  like: Like[];

  @HasMany(() => Feed)
  feed: Feed[];

  @HasMany(() => Pick)
  pick: Pick[];

  @HasMany(() => Comment)
  comment: Comment[];

  @PrimaryKey
  @AllowNull(false)
  @AutoIncrement
  @Unique
  @Column
  user_id: number;

  @AllowNull(false)
  @Unique
  @Column
  login_id: string;

  @AllowNull(false)
  @Column
  password: string;

  @AllowNull(false)
  @Column
  nickname: string;

  @Column
  mbti: string;

  @Column
  provider: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;
}
