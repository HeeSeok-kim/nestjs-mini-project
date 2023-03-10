import {
  Table,
  Column,
  Model,
  PrimaryKey,
  ForeignKey,
  CreatedAt,
  UpdatedAt,
  BelongsTo,
  AllowNull,
  AutoIncrement,
} from 'sequelize-typescript';
import { Users } from './users.model';
import { Posts } from './posts.model';
@Table({
  modelName: 'Likes',
  tableName: 'likes',
  freezeTableName: false,
  timestamps: true,
})
export class Likes extends Model {
  @BelongsTo(() => Posts)
  posts: Posts;

  @BelongsTo(() => Users)
  users: Users;

  @PrimaryKey
  @AllowNull(false)
  @AutoIncrement
  @Column
  like_id: number;

  @ForeignKey(() => Users)
  @AllowNull(false)
  @Column
  user_id: number;

  @ForeignKey(() => Posts)
  @AllowNull(false)
  @Column
  feed_id: number;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;
}
