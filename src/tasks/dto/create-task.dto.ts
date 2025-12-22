import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsOptional,
  IsBoolean,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty({ message: 'The title cannot be empty.' })
  @MinLength(3, { message: 'The title must be at least 3 characters long.' })
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsOptional()
  isDone?: boolean;
}
