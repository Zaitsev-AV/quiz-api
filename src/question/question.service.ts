import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionRepository } from './question.repository';
import { Question } from './question.entity';

@Injectable()
export class QuestionService {
	constructor(
		@InjectRepository(QuestionRepository)
		private questionRepository: QuestionRepository,
	) {}
	
	async getAllQuestions(): Promise<Question[]> {
		return this.questionRepository.find();
	}
}
