import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';


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

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
