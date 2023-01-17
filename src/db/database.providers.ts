import { Sequelize } from 'sequelize-typescript';
import { Users } from 'src/db/models/users.model';
import { Posts } from './models/posts.model';
import { PostImages } from './models/post.images.model';
import { Comments } from './models/comment.models';
import { Likes } from './models/like.models';
import { Picks } from './models/picks.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_SCHEMA,
      });
      sequelize.addModels([Posts, Users, PostImages, Comments, Likes, Picks]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
