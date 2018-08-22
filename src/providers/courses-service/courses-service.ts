import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
 Generated class for the CoursesServiceProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
*/
@Injectable()
export class Provider {
 url ="assets/codetribe.json" ;


 constructor(public http: HttpClient) {

 }
getCourses(){
 return this.http.get(this.url)


}
}