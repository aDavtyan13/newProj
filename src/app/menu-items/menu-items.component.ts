import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item.interface';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {

  @Input() menuItem: Item;

  constructor() { }

  ngOnInit() {
  }

}