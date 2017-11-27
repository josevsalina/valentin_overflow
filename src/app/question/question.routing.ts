import {QuestionListComponent} from "./question-list.component";
import {QuestionFormComponent} from "./question-form.component";
import {QuestionDetailComponent} from "./question-detail.component";


export const QUESTION_ROUTES = [
  {path:'', component: QuestionListComponent },
  {path:'new', component: QuestionFormComponent } ,
  {path:':id', component: QuestionDetailComponent }
];


