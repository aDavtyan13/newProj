import { Component, OnInit } from '@angular/core';
import {Item} from '../item.interface'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: Item[] = [{
    icon: 'notifications',
    name: 'Dashboard',
    active: false
  },{
    icon: 'Forms',
    name: 'Forms',
    active: false
  },
  {
    icon: 'UI features',
    name: 'UI features',
    active: false
  },{
    icon: 'Tables',
    name: 'Tables',
    active: false
  },{
    icon: 'Charts',
    name: 'Charts',
    active: false
  },{
    icon: 'sample pages',
    name: 'sample pages',
    active: false
  }
];

  constructor() { }

  ngOnInit() {
  }

}
