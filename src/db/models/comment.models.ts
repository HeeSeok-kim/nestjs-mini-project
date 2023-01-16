import {
  Table,
  Column,
  Model,
  PrimaryKey,
  ForeignKey,
  CreatedAt,
  UpdatedAt,
  BelongsTo,
  AutoIncrement,
  AllowNull,
} from 'sequelize-typescript';
import { Users } from './users.model';
import { Posts } from './posts.model';
@Table({
  modelName: 'Comments',
  tableName: 'comments',
  freezeTableName: false,
  timestamps: true,
})
export class Comments extends Model {
  @BelongsTo(() => Users)
  users: Users;

  @BelongsTo(() => Posts)
  posts: Posts;

  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column
  comment_id: number;

  @ForeignKey(() => Users)
  @AllowNull(false)
  @Column
  user_id: number;

  @ForeignKey(() => Posts)
  @AllowNull(false)
  @Column
  post_id: number;

  @AllowNull(false)
  @Column
  depth: boolean;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;
}
