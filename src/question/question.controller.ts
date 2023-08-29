import { Controller, Get } from '@nestjs/common';
import { QuestionService } from './question.service';

@Controller('questions')
export class QuestionController {
	constructor(private questionService: QuestionService) {}
	
	@Get('random')
	async getRandomQuestion(): Promise<{
		question: string;
		options: ( { answer: string; correct: boolean }  )[];
		id: number
	}> {
		return this.questionService.getRandomQuestion();
	}
}
