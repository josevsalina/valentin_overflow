import {Component, OnInit} from "@angular/core";
import {Question} from "./question.model";
import {QuestionService} from "./question.service";
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
  `],
  providers: [QuestionService]
})

export class QuestionListComponent implements OnInit{
  questions: Question[];
  loading = true;

  constructor(private questionService: QuestionService){  }

  ngOnInit(){
    this.questionService.getQuestions().then((questions: Question[])=>{
      this.questions=questions;
      this.loading=false;
    })
  }

}
