import {Component, OnInit} from '@angular/core';
import {H21ToolbarItem} from '@h21/h21.core.ui/models/h21-toolbar-item';

@Component({
  selector: 'app-travelport',
  templateUrl: './travelport.component.html',
  styleUrls: ['./travelport.component.css']
})
export class TravelportComponent implements OnInit {
  actions: Array<H21ToolbarItem> = [{
    action: params => {
      this.visible = true;
    },
    disabled: params => false,
    visible: params => true,
    hint: '1',
    icon: 'icon icon-android-notifications'
  }, {
    action: params => {
    },
    disabled: params => false,
    visible: params => this.visible,
    hint: '2',
    icon: 'icon icon-android-notifications'
  }, {
    action: params => {
    },
    disabled: params => false,
    visible: params => true,
    hint: '3',
    icon: 'icon icon-android-notifications'
  }];
  visible = false;
  constructor() {
  }

  ngOnInit() {
    const items = this.actions.filter(x => x.visible());
    console.log(items);
  }

}
