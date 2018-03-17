import { QuestionsAnswer } from './questions_answer.model';

export class Question {
    id: number;
    title: string;
    question_type: string;
    form_id: number;
    questions_answers: QuestionsAnswer[] = [];

    constructor(questionInfo: any) {
        this.id = questionInfo.id;
        this.title = questionInfo.title;
        this.question_type = questionInfo.question_type;
        this.form_id = questionInfo.form_id;
        
        this.includeQuestionsAnswers(questionInfo.questions_answers);
    }

    private includeQuestionsAnswers(questions_answers: any) {
        for (const index in questions_answers) {
            this.questions_answers.push( new QuestionsAnswer(questions_answers[index]) );
        }
    }
}
