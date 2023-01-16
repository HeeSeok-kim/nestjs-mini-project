import {
  Table,
  Column,
  Model,
  PrimaryKey,
  ForeignKey,
  CreatedAt,
  UpdatedAt,
  BelongsTo,
  HasMany,
  AutoIncrement,
  AllowNull,
} from 'sequelize-typescript';
import { Posts } from './posts.model';

@Table({
  modelName: 'PostImages',
  tableName: 'post_images',
  freezeTableName: false,
  timestamps: true,
})
export class PostImages extends Model {
  @BelongsTo(() => Posts)
  posts: Posts;

  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column
  post_image_id: number;

  @ForeignKey(() => Posts)
  @AllowNull(false)
  @Column
  post_id: number;

  @AllowNull(false)
  @Column
  post_image_origin_name: string;

  @AllowNull(false)
  @Column
  post_image_new_name: string;

  @AllowNull(false)
  @Column
  post_image_type: string;

  @AllowNull(false)
  @Column
  post_image_size: number;

  @CreatedAt
  created_at: Date;
}
