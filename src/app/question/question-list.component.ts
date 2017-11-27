import {Component} from "@angular/core";
import {Question} from "./question.model";

const  q = new Question("¿Como reutilizo un componente en android?", "Miren esta es mi pregunta ... " ,new Date(), "help");


@Component({
  selector:"app-question-list",
  templateUrl:"./question-list.component.html",
  styles: [`
    i{
      font-size: 32px !important;
    }
    
    .question-add{
      position: fixed;
      right: 30px;
      bottom: 30px;
      font-size: 24px;
    }
  `]
})

export class QuestionListComponent{
  questions: Question[] = new Array(10);

  constructor(){
    for(let i =0; i<10; i++)
      this.questions[i] = q;
  }
}
