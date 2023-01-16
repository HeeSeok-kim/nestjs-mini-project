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
import { Users } from './users.model';
import { Comments } from './comment.models';
import { Likes } from './like.models';
import { Picks } from './picks.model';
import { PostImages } from './post.images.model';

@Table({
  modelName: 'Posts',
  tableName: 'posts',
  freezeTableName: false,
  timestamps: true,
})
export class Posts extends Model {
  @HasMany(() => PostImages)
  postImages: PostImages[];

  @HasMany(() => Comments)
  comments: Comments[];

  @HasMany(() => Likes)
  likes: Likes[];

  @HasMany(() => Picks)
  picks: Picks;

  @BelongsTo(() => Users)
  user: Users;

  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column
  post_id: number;

  @ForeignKey(() => Users)
  @AllowNull(true)
  @Column
  user_id: number;

  @Column
  title: string;

  @AllowNull(false)
  @Column
  description: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;
}
