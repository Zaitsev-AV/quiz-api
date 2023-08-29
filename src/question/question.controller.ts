import { Controller, Get } from '@nestjs/common';
import { QuestionService } from './question.service';
import { Question } from './question.entity';

@Controller('questions')
export class QuestionController {
	constructor(private questionService: QuestionService) {}
	
	@Get()
	async getAllQuestions(): Promise<Question[]> {
		return this.questionService.getAllQuestions();
	}
}
