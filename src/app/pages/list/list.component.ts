import { Component, OnInit } from '@angular/core';

import {JsBridgeService} from '../../services/js-bridge.service';
import {list} from '../../../../mock/list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items: any[] = list;

  constructor(
    private _jsBridge: JsBridgeService
  ) {
  }

  ngOnInit() {
    this._jsBridge.setAppTitle('选择图例');
    this._jsBridge.controlAppBackButton(false);
  }
}
