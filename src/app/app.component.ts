import { Component } from '@angular/core';
import { FormControl , FormGroup , Validator, Validators} from '@angular/forms';

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

  // Todo list
  list:any[] = [];
  addTask(item:string){
    this.list.push({id:this.list.length , name:item});
    console.warn(this.list)
  }
  
  removeTask(id:number){
    console.warn(id);
    this.list=this.list.filter(item => item.id!==id);
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

    //Template Driven Form
    userLogin(item:any){
      console.log(item);
    }

    //Reactive form
    logForm = new FormGroup({
      user: new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required , Validators.email]),
      password: new FormControl('',[Validators.required , Validators.minLength(5)]),
      upper_alphabet: new FormControl('',[Validators.required , Validators.pattern('[azA-Z]+$')]),
      lower_alphabet: new FormControl('',[Validators.required , Validators.pattern('[a-zAZ]+$')])

    })
    loginUser(){
      console.log(this.logForm.value);
    }

    get user(){
      return this.logForm.get('user')
    }
    get email(){
      return this.logForm.get('email')
    }
    get password(){
      return this.logForm.get('password')
    }
    get upper_alphabet(){
      return this.logForm.get('upper_alphabet')
    }
    get lower_alphabet(){
      return this.logForm.get('lower_alphabet')
    }
}
