import {
  Table,
  Column,
  Model,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
  AllowNull,
  Unique,
  AutoIncrement,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Posts } from './posts.model';
import { Users } from './users.model';

@Table({
  modelName: 'Picks',
  tableName: 'picks',
  freezeTableName: false,
  timestamps: true,
})
export class Picks extends Model {
  @BelongsTo(() => Users)
  users: Users;

  @BelongsTo(() => Posts)
  posts: Posts;

  @PrimaryKey
  @AllowNull(false)
  @AutoIncrement
  @Unique
  @Column
  pick_id: number;

  @ForeignKey(() => Users)
  @AllowNull(false)
  @Column
  user_id: number;

  @ForeignKey(() => Posts)
  @AllowNull(false)
  @Column
  post_id: number;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;
}
