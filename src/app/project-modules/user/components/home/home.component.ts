import { Component, EventEmitter, Input, Output } from '@angular/core';

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
}
