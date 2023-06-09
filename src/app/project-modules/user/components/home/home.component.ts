import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from 'src/app/project-modules/services/api.service';
import { ApiConstant } from 'src/app/project-modules/shared/apiconstants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 projects=[{"title":"INTEZ"},{"title":"Zoft Site"},{"title":"OneClick"},{"title":"Bass Phase 2"}]

 feeds=[
  {
    "content":"📢 Exciting Journey! 🎥🏢 Take a moment to watch the video, and let us know your thoughts and impressions in the comments below. We are excited to hear your feedback and share this remarkable accomplishment with all of you! ",
    "attachment":"../../../../../assets/images/video.png",
    "time":"10 min ago"
},
{
  "content":" video, and let us know your thoughts and impressions in the comments below. We are excited to hear your feedback and share this remarkable accomplishment with all of you! ",
  "attachment":"../../../../../assets/images/video.png",
  "time":"20 min ago"
},
{
  "content":" Take a moment to watch the video, and let us know your thoughts and impressions in the comments below. We are excited to hear your feedback and share this remarkable accomplishment with all of you! ",
  "attachment":"../../../../../assets/images/video.png",
  "time":"30 min ago"
},
]

events=[
  {
    "title":"TechX",
    "image":"../../../../../assets/images/eventImg.svg",
    "content":"TechX is a cutting-edge industry gathering for tech enthusiasts and business professionals to explore trends, advancements, and disruptive technologies shaping the future. Connect with experts, engage in discussions, and discover innovative solutions.",
    "start_date":"",
    "end_date":""
  },
  {
    "title":"Innovation Summit",
    "image":"../../../../../assets/images/eventImg.svg",
    "content":"Join industry leaders, entrepreneurs, and innovators at the Innovation Summit to explore cutting-edge ideas, trends, and the future of technology and business. Connect, learn, and collaborate with renowned speakers, workshops, and industry connections.",
    "date":""
  }
]


constructor(
  private apiService:ApiService
){ 
  this.getCurrentWeekDates()
 } 

 ngOnInit(){
  this.getProjectList()
 }

getCurrentWeekDates() {
  const currentDate = new Date();
  const currentDay = currentDate.getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday

  // Calculate the starting date of the current week
  const startingDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDay);

  const weekDates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(startingDate.getFullYear(), startingDate.getMonth(), startingDate.getDate() + i);
    weekDates.push(date.getDate());
  }
 console.log("weekDates",weekDates)
  return weekDates;
}

isCurrentDate(date?:number){
  const currentDate = new Date().getDate()
  console.log("currentDate",currentDate,date)
  if(currentDate == date){
    return true
  }
  else{
   return false
  }
}


getProjectList() {
  console.log("this.apiService.baseUrl", this.apiService.baseUrl)
  this.apiService
    .ExecuteGet(this.apiService.baseUrl + ApiConstant.getProjectList)
    .subscribe(
      (response: any) => {
       console.log("response",response)
      },
      (error: any) => {

      }
    );
}

}
