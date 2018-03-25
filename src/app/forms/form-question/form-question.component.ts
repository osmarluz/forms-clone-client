import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../../shared/question.service';
import { Question } from '../../shared/question.model';
import { MzToastService } from 'ng2-materialize';

@Component({
  selector: 'app-form-question',
  templateUrl: './form-question.component.html',
  styleUrls: ['./form-question.component.css']
})
export class FormQuestionComponent implements OnInit {

  @Input() question: Question;
  @Input() questions: Question[];
  @Input() form_id: number;

  constructor(
    private questionService: QuestionService,
    private toastService: MzToastService
  ) { }

  ngOnInit() {
  }

  onSubmit(q) {
    if (this.question.id) {
      this.questionService.updateQuestion(this.question.id, this.question).subscribe(data => {
        this.toastService.show('Question updated', 8000, 'green');
      }, error => {
        this.toastService.show('Problem while updating question', 8000, 'red');
      });
    } else {
      this.questionService.createQuestion(this.form_id, this.question).subscribe(data => {
        this.questions.push(new Question(data));
        this.question = new Question({});
      }, error => {
        this.toastService.show('Problem while creating question', 8000, 'red');
      });
    }
  }

  deleteQuestion(): boolean {
    if (confirm('Do you want to delete this question?')) {
      this.questionService.destroyQuestion(this.question.id).subscribe(data => {
        const index = this.questions.indexOf (this.question);
        this.questions.splice(index, 1);
        this.toastService.show('Question deleted', 8000, 'green');
      }, error => {
        this.toastService.show('Error while deleting question ' + this.question.title, 8000, 'red');
      });
    }
    return false;
  }
}
