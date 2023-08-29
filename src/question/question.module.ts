import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';
import { QuestionRepository } from './question.repository';
import { Question } from './question.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Question, QuestionRepository])],
	controllers: [QuestionController],
	providers: [QuestionService],
})
export class QuestionModule {}
