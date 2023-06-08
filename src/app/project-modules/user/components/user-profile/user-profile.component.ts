import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
 skills=["UX Design","Product Design","Figma"]
 
 teamMembers=[
  {
    "name":"Kevin Alexander",
    "avatar":"../../../../../assets/icons/profileIMG.svg",
    "position":"UI/UX Designer"
  },
  {
    "name":"Alex John",
    "avatar":"../../../../../assets/images/sample-profile-picture.png",
    "position":"Web Developer"
  },
  {
    "name":"Edwin Alex",
    "avatar":"../../../../../assets/icons/profileIMG.svg",
    "position":"Web Developer"
  },
  {
    "name":"Winson John",
    "avatar":"../../../../../assets/icons/pic.svg",
    "position":"Web Developer"
  }
 ]

 collegues=[
  {
    "name":"Christopher Neil",
    "avatar":"../../../../../assets/images/sample-profile-picture.png",
    "position":"UI/UX Designer"
  },
  {
    "name":"Agnus John",
    "avatar":"../../../../../assets/icons/collegpic.png",
    "position":"Web Developer"
  },
  {
    "name":"Christo Alex",
    "avatar":"../../../../../assets/icons/profileIMG.svg",
    "position":"Web Developer"
  },
  {
    "name":"Winson John",
    "avatar":"../../../../../assets/icons/pic.svg",
    "position":"Web Developer"
  }
 ]

 feeds=[
  {
    "content":"Exciting Journey!Take a moment to watch the video, and let us know your thoughts and impressions in the comments below. We are excited to hear your feedback and share this remarkable accomplishment with all of you! ",
    "attachment":"../../../../../assets/images/eventImg.svg",
    "time":"10 min ago"
},

{
  "content":" Take a moment to watch the video, and let us know your thoughts and impressions in the comments below. We are excited to hear your feedback and share this remarkable accomplishment with all of you! ",
  "attachment":"../../../../../assets/images/eventImg.svg",
  "time":"30 min ago"
},
]
}
