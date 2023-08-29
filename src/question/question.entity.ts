import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';


@Entity()
export class Question {
	@PrimaryGeneratedColumn()
	id: number;
	
	@Column()
	question: string;
	
	@OneToMany(() => Option, option => option.question)
	options: Option[];
}

@Entity()
export class Option {
	@PrimaryGeneratedColumn()
	id: number;
	
	@Column()
	answer: string;
	
	@Column({ default: false })
	correct: boolean;
	
	@ManyToOne(() => Question, question => question.options)
	question: Question;
}

// Пример вопросов
const questionsWithAnswers = [
	{
		question: "Какой тип данных используется для обозначения чисел в JavaScript?",
		options: [
			{ answer: "string", correct: false },
			{ answer: "number", correct: true },
			{ answer: "boolean", correct: false }
		]
	},
	{
		question: "Что такое JSX в React?",
		options: [
			{ answer: "Модульный синтаксис JavaScript", correct: false },
			{ answer: "Расширение синтаксиса JavaScript, позволяющее использовать HTML-подобный синтаксис в React", correct: true },
			{ answer: "Функция в React, которая отвечает за вывод компонентов", correct: false }
		]
	}
];
/*


const questionRepository = getRepository(Question);
const optionRepository = getRepository(Option);


// Вам нужно выполнить этот код в асинхронной функции или при использовании async/await
const getData = async () => {
	for (const questionWithAnswers of questionsWithAnswers) {
		const question = new Question();
		question.question = questionWithAnswers.question;
		
		const savedQuestion = await questionRepository.save(question);
		
		for (const option of questionWithAnswers.options) {
			const newOption = new Option();
			newOption.answer = option.answer;
			newOption.correct = option.correct;
			newOption.question = savedQuestion;
			
			await optionRepository.save(newOption);
		}
	}
}
*/

