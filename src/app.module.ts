import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { QuestionModule } from "./question/question.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // Настройки для подключения к базе данных
      type: 'sqlite',
      database: 'quiz.db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    QuestionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
