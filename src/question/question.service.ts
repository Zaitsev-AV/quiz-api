import { Injectable } from '@nestjs/common';
import { questionsWithAnswers } from './questions.data';

@Injectable()
export class QuestionService {
	private questions = [...questionsWithAnswers];
	
	getRandomQuestion() {
		const randomIndex = Math.floor(Math.random() * this.questions.length);
		return this.questions[randomIndex];
	}
}
