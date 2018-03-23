import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormListComponent } from './form-list/form-list.component';
import { FormEditComponent } from './form-edit/form-edit.component';
import { ActiveComponent } from './shared/active/active.component';
import { MaterializeModule } from 'ng2-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { routing } from './../app.routing';
import { FormsModule as CoreFormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { FormDetailsComponent } from './form-details/form-details.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { FormQuestionComponent } from './form-question/form-question.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterializeModule.forRoot(),
    routing,
    CoreFormsModule,
    ColorPickerModule
  ],
  exports: [
    FormListComponent
  ],
  declarations: [FormListComponent, FormEditComponent, ActiveComponent, FormDetailsComponent, QuestionListComponent, FormQuestionComponent]
})
export class FormsModule { }
