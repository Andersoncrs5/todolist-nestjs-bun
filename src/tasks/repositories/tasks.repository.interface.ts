import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { Task } from '../entities/task.entity';

export interface ITaskRepository {
  create(createTaskDto: CreateTaskDto): Promise<Task>;
  findAll(): Promise<Task[]>;
  findById(id: string): Promise<Task | null>;
  update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task>;
  remove(id: string): Promise<void>;
}
