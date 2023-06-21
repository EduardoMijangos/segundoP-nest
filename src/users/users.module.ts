import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';


@Module({
  controllers: [UsersController],
  providers: [UsersService, PassportModule, JwtModule],
  imports:[
    TypeOrmModule.forFeature([User]),
    PassportModule.register({
      defaultStrategy: 'jwt'}),
      JwtModule.register({
        secret: 'secret',
        signOptions:{
          expiresIn:'1h'}}),
  ],
  exports:[PassportModule, JwtModule]
})
export class UsersModule {}
