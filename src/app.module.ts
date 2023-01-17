import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { PostModule } from 'src/api/post/post.module';
import { UserModule } from './api/user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PostModule,
    UserModule,
    AuthModule,
    // SequelizeModule.forRoot({
    //   dialect: 'mysql',
    //   host: process.env.DATABASE_HOST,
    //   port: parseInt(process.env.DATABASE_PORT),
    //   username: process.env.DATABASE_USERNAME,
    //   password: process.env.DATABASE_PASSWORD,
    //   database: process.env.DATABASE_SCHEMA,
    //   autoLoadModels: true,
    //   synchronize: false,
    // }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
