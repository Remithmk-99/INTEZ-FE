import { Component } from '@angular/core';

@Component({
  selector: 'app-timesheet-dashboard',
  templateUrl: './timesheet-dashboard.component.html',
  styleUrls: ['./timesheet-dashboard.component.scss']
})
export class TimesheetDashboardComponent {
  project:boolean=false
  workTypes:boolean=false
  module:boolean=false
  projectListView:boolean=false
  projects=["INTEZ","ZoftSite","OneClick","BassPhase"]
  modules=["1","2","3","4"]
  workType=["1","2","3","4"]
  addNewProject:boolean=false

  timeSheet=[
    {
      projects:[],
      modules:[],
      workType:[],
      day:[]
    }
  ]

  viewProjectList(){
this.projectListView=!this.projectListView
  }

  selectedPoject(val:any){
console.log("val",val)
    this.timeSheet.forEach((res)=>{
      console.log("res",res)
      //  res?.projects.push(val)
    })
  }
  addWorkType(){
  }

  // updateNewProjectStatus(type:string){
  //   // this.addNewProject=!this.addNewProject
  //   if(type=='project'){
  //     this.project=true
  //   }
  //   else if(type=='module'){
  //     this.module=true
  //   }
  //   else if(type=='workType'){
  //     this.workTypes=true
  //   }
  //   console.log("this.module",this.module,typ)
  // }
}
