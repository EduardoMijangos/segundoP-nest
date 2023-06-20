import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { DeleteQueryBuilder, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { loginDto } from './dto/login.dto';
import { of } from 'rxjs';
@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User) private userRepository:Repository<User>
  ){}

  async create(createUser: CreateUserDto) {
      try {
      const {password,...useData} = createUser;
      const user = this.userRepository.create({
      ...useData,
        password:bcrypt.hashSync(password, 10)
      });
      await this.userRepository.save(user);
      delete user.password;
      return { ...user}
      }
      catch ([error]){
      return error
      }
    }
    //const users = this.userRepository.create(createUser);
    //await this.userRepository.save(users);
    //return users;

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

  async update(id: number, updateUser: UpdateUserDto) {
    const email = updateUser.email;
    delete updateUser.email;
    await this.userRepository.update(id, updateUser);
    const user = await this.userRepository.findOne({
      where: {id}});
      if (!user){
        throw new BadRequestException('Usuario no encontrado, nel no se puede');
      }
      delete user.email;
      updateUser.email = email;
      return user;
  }

  remove(id: number) {
    this.userRepository.delete(id);
    return "Elimindado"
  }

  async login(user: loginDto){
    const {password, email} = user;
    const userFind = await this.userRepository.findOne(
      {
        where: {email}, select: {password:true,edad:true,email:true,name:true,apellidos:true,estate:true}});
    if(!userFind){
      throw new UnauthorizedException('Intentale de nuevo mi bro');
    }
    if(!bcrypt.compareSync(password, userFind.password)){
      throw new UnauthorizedException('Intentale de nuevo mi bro');
    }
    delete userFind.password;
    return{
      ...userFind
    }
  }

}

