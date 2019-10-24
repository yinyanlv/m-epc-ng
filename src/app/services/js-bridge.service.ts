import {Injectable} from '@angular/core';

@Injectable()
export class JsBridgeService {
  private jsBridge: any;
  constructor() {
    this.jsBridge = window['jsBridge'] || null;
  }

}
