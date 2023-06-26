import { Inject, Injectable, BadRequestException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Like, Repository } from 'typeorm';


@Injectable()
export class TaskService {

  constructor(
    @InjectRepository(Task) private taskRepository:Repository<Task>
  ){}


  async create(createTask: CreateTaskDto) {
    const task = this.taskRepository.create(createTask);
    await this.taskRepository.save(task);
    return task;
  }

  findAll() {
    const tasks = this.taskRepository.find();
    return tasks;
  }

  async findOne(id: number) {
    const task = await this.taskRepository.findOne({
      where:{id}});
      if (!task){
      throw new BadRequestException('Task not found');
    }return task;
      
  }

  async update(id: number, updateTask: UpdateTaskDto) {
    await this.taskRepository.update(id, updateTask);
    const task =  await this.taskRepository.findOne({
      where: {id}});
      if (!task){
        throw new BadRequestException('Task not found, es que no existe');
      }
    return task;
  }

  remove(id: number) {
    this.taskRepository.delete(id);
  }

  async search(termino:string) {
    const task = await this.taskRepository.find(
      {where: {title: Like(`%${termino}%`)}});
      return task
  }

  
}
