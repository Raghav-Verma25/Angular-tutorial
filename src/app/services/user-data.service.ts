import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  users(){
    return[
      {name:'Raghav' , age:20 , email:'raghav@gmail.com'},
      {name:'Adarsh' , age:20 , email:'adarsh@gmail.com'},
      {name:'Shailesh' , age:21 , email:'shailesh@gmail.com'},
    ]
  }
}
