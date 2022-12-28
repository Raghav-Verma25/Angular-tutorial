import { Component } from '@angular/core';

import {UserDataService} from '../services/user-data.service';
@Component({
  selector: 'app-service-footer',
  templateUrl: './service-footer.component.html',
  styleUrls: ['./service-footer.component.css']
})
export class ServiceFooterComponent {

    //Make service and use in multiple files
    users:any;
    constructor(private userData: UserDataService){
      console.warn("userdata",userData.users());
      this.users = userData.users();

    }
}
