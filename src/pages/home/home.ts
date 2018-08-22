import { Provider } from './../../providers/courses-service/courses-service';
import { DetailsPage } from './../details/details';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  courses:any;
  arrayCourse=[];
  lessons:any;

  constructor(public navCtrl: NavController,private provider:Provider) {
      provider.getCourses().subscribe(results=>{
    
        this.courses=results;
        this.arrayCourse = this.courses.courses;
            console.log("response",results);
      });
  }
  gotoCoursePage(lessons:any){
    this.navCtrl.push(DetailsPage,{data:lessons
    });
  }

}