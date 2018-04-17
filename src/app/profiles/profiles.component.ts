import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  dashboard = [];

  tabs = [
    {
      id: 0,
      text: 'Common'
    },
    {
      id: 1,
      text: 'Link'
    }
  ];

  constructor() {
  }

  ngOnInit() {
    this.dashboard.push({
      label: 'General info',
      click: (e) => {
        console.log(e);
      }
    });

    this.dashboard.push({
      quantity: 'General info',
      click: (e) => {
        console.log(e);
      }
    });

    this.dashboard.push({
      label: 'Agents',
      quantity: '20',
      click: (e) => {
        console.log(e);
      }
    });

    this.dashboard.push({
      label: 'Services',
      quantity: '30',
      icon: 'ion-ios-briefcase',
      click: (e) => {
        console.log(e);
      }
    });

    this.dashboard.push({
      label: 'Providers',
      quantity: '40',
      notify: '+2 provides',
      notifyType: 'success',
      click: (e) => {
        console.log(e);
      }
    });
  }
}
