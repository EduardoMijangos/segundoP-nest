import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User) private userRepository:Repository<User>
  ){}

  async create(createUser: CreateUserDto) {
    const users = this.userRepository.create(createUser);
    await this.userRepository.save(users);
    return users;
  }

  findAll() {
    const users = this.userRepository.find();
    return users;
  }

   async findOne(id: number) {
    const users = await this.userRepository.findOne(
      {where: {id}});
      if(!users){
        throw new BadRequestException('Usuario no encontrado');
      }return users;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
