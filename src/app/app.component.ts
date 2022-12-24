import { Component } from '@angular/core';

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
  
   logMessage(){
    console.log();
   }
 
  // Two way binding

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

}
