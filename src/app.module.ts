import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'mijangos',
      database: 'proyecto',
      autoLoadEntities: true,
      synchronize: true,
    }),
  TaskModule,
  UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
