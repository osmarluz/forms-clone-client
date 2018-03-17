import { QuestionsAnswer } from './questions_answer.model';

export class Answer {
    id: number;
    form_id: number;
    questions_answers: QuestionsAnswer[] = [];

    constructor(answerInfo: any) {
        this.id = answerInfo.id;
        this.form_id = answerInfo.form_id;

        this.includeQuestionsAnswers(answerInfo.questions_answers);
    }

    private includeQuestionsAnswers(questions: any) {
        for (const index in questions) {
            this.questions_answers.push( new QuestionsAnswer(questions[index]) );
        }
    }
}
