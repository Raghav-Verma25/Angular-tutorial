import { Component } from '@angular/core';
import { FormControl , FormGroup , Validator, Validators} from '@angular/forms';
import { UserDataService } from './services/user-data.service'

interface dataType{
  name:string , id:number  , Indian:boolean , address:any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public name1 ="";

  public str = 'Angular tutorial'
  title = 'Angular hello-world';
  public myId = 'myid'
  public successclass = "text-success";
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger" : this.hasError,
    "text-special" : this.isSpecial
    
  }
 // style
  public highlightcolor = "orange";
  
 public titleStyle = {
  color:'pink',
  fontStyle:"bold",
  fontSize:"60px"
 }
  myclass: any;
  function(){
    return "Hello" + this.str;
  }

  // event
  public greeting = "";

  onClick(){
    console.log("welcome to angular js");
    this.greeting="Welcome to angular js"
  }

  // Templte Reference variable
  
   logMessage(value:any){
    console.log(value);
   }
 
  // Two way binding
    name5:any;

  //ngIf directive
  public condition = true;
  public condition2 = false;
  public show = 'red';

  //ngSwitch directive
  public ngColor1 = "blue";

  //ngFor Directive
  public colors = ['red','orange','blue','purple'];

  //Pipes
  public strg = "angular js - pipes";
  public person = {"firstName": "Roman" , 
                   "lastName" : "reign" 
                      };
  public date = new Date();                    

  //Service
  public employee = [
    {"id": 1 , "name": "jindal" , "age": 29 },
    {"id": 2 , "name": "Roman" , "age": 35 },
    {"id": 2 , "name": "Rollin" , "age": 40 }
  ];

  // form

  getUserValue(value: any){
    console.log(value);
  }


  //Pass Data Child to Component
  data = 10;
  updateChildValue(){
    this.data = Math.random()*10;
  }

  //Reusable Component
   r ="app-user-detial";
   userDetail =[
    {name:"raghav",email:"raghav@gmail.com"},
     {name:"adarsh",email:"adarsh@gmail.com"},
      {name:"dhruv",email:"dhruv@gmail.com"},
      {name:"shailesh",email:"shailesh@gmail.com"}
   ]

   // Send data child to parent component
    s = "Send data child to parent component"
    updateData(item4:string){
      console.warn(item4)
    }

    //Make service and use in multiple files
    users:any;
    constructor(private userData: UserDataService){
      console.warn("userdata",userData.users());
      this.users = userData.users();
    }

    // Model
    getData(){
      const data:dataType={
        name:"Raghav",id:20 , Indian:true , address:"Mathura"
      }//make interface in after import statement

    }


    
}
