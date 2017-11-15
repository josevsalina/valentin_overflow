import {Component} from "@angular/core";
import {Question} from "./question.model";
@Component({
  selector:'app-question-detail',
  templateUrl: "./question-detail.component.html",
  styleUrls: ["./question-detail.component.css"]
})

export class QuestionDetailComponent{
  question: Question;
  constructor(){
    this.question = new Question('Pregunta sobre angular', 'no abre la app', new Date(), "devicon-android-plain colored");
  }
}
