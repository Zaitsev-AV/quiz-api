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
