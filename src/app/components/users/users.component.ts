import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    address: {
      street: '',
      city:'',
      state: ''
    }
  };
  users: User[];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

  constructor() { }

  ngOnInit() {
      this.users = [
        {
          firstName: 'Pere',
          lastName: 'Pérez',
          age: 41,
          address: {
            street: 'Patilots',
            city: 'Sueca',
            state: 'Spain',
          },
          isActive: true,
          registered: new Date('01/08/1978 08:45:00'),
          hide: true
        },
        {
          firstName: 'Paco',
          lastName: 'Rodríguez',
          age: 21,
          address: {
            street: 'Benlloch',
            city: 'Valencia',
            state: 'Spain'
          },
          isActive: false,
          registered: new Date('05/09/1999 08:45:00'),
          hide: true
        },
        {
          firstName: 'Genaro',
          lastName: 'Gutiérrez',
          age: 36,
          address: {
            street: 'Julepe',
            city: 'Alzira',
            state: 'Spain'
          },
          isActive: true,
          registered: new Date('11/07/1999 08:45:00'),
          hide: true
        }
      ];
      this.loaded = true;

    

  /*   this.addUser({
      firstName: 'Florence',
      lastName: 'Dubois',
    }); */

   /*  this.setCurrentClasses();
    this.setCurrentStyles(); */
  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);

    this.user = {
      firstName: '',
      lastName: '',
      age: null,
      address: {
        street: '',
        city:'',
        state: ''
      }
    }
  }

  toggleHide(user: User) {
    user.hide = !user.hide;
  }
  onSubmit(e) {
    console.log(123);

    e.preventDefault();
  }

  fireEvent(e) {
    console.log(e.type);
    console.log(e.target.value);
  }

  /* setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    }
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px',
    }
  } */


}
