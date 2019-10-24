import { Component, OnInit } from '@angular/core';

import {list} from '../../../../mock/list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items: any[] = list;

  constructor() { }

  ngOnInit() {
  }
}
