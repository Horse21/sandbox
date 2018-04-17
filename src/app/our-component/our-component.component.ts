import { Component, OnInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';

@Component({
  selector: 'our-component',
  templateUrl: './our-component.component.html',
  styleUrls: ['./our-component.component.css']
})
export class OurComponentComponent implements OnInit {
  dashboard = [];
  dataSource = [{name: 'a', value: 'b', category: 'c'}];
  value = ['b'];
  displayExpr = 'name';
  valueExpr = 'value';
  disabled = false;

  simpleProducts: DataSource;
  constructor() {
    this.simpleProducts = new DataSource({
      store: new ArrayStore({
        data: this.dataSource,
        key: "id",
      }),
      group: "category"
    });
  }

  ngOnInit() {
    this.dashboard = [
      {cols: 2, rows: 1, y: 0, x: 0, label: 'Branches', quantity: 10, click: () => {console.log(1); }},
      {cols: 2, rows: 2, y: 0, x: 2, hasContent: true, click: () => {console.log(2); }},
      {cols: 1, rows: 1, y: 0, x: 4},
      {cols: 1, rows: 1, y: 2, x: 5}
    ];
  }

  customItemCreating(args) {
    const newItem = {name: args.text, value: args.text, category: args.text};
    this.dataSource.push(newItem);
    this.value.push(newItem.value);
    return null;
  }
}
