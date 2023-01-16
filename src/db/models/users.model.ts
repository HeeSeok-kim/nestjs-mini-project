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
import { Likes } from './like.models';
import { Posts } from './posts.model';
import { Comments } from './comment.models';
import { Picks } from './picks.model';

@Table({
  modelName: 'User',
  tableName: 'users',
  freezeTableName: false,
  timestamps: true,
})
export class Users extends Model {
  @HasMany(() => Likes)
  likes: Likes[];

  @HasMany(() => Posts)
  posts: Posts[];

  @HasMany(() => Picks)
  picks: Picks[];

  @HasMany(() => Comments)
  comments: Comments[];

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

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;
}
