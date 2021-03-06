import {Injectable} from '@angular/core';
import {Location} from '@angular/common';

@Injectable()
export class JsBridgeService {

  private readonly _jsBridge: any;

  constructor(
    private _location: Location
  ) {
    this._jsBridge = window['AppJsObject'] || null;
    this._initJsInterface();
  }

  controlAppBackButton(isShow: boolean = false) {
    if (this._jsBridge) {
      this._jsBridge.isShowBackButton(isShow);
    }
    if (window['webkit'] && window['webkit']['messageHandlers']) {
      window['webkit']['messageHandlers'].isShowBackButton.postMessage(isShow);
    }
  }

  setAppTitle(title: string = '') {
    if (this._jsBridge) {
      this._jsBridge.setWebPageTitle(title);
    }
    if (window['webkit'] && window['webkit']['messageHandlers']) {
      window['webkit']['messageHandlers'].setWebPageTitle.postMessage(title);
    }
  }

  _initJsInterface() {
    window['clickedBackButton'] = () => {
      this._location.back();
    };
  }
}
