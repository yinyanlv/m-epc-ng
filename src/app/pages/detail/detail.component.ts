import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {environment} from '../../../environments/environment';
import {JsBridgeService} from '../../services/js-bridge.service';
import {list} from '../../../../mock/list';
import {SvgHotpointComponent} from '../../components/svg-hotpoint/svg-hotpoint.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, AfterViewInit {

  @ViewChild('svgHotPoint', {static: false})
  private _svgHotPoint: SvgHotpointComponent;

  public item: any;
  public assetsPrefix: string = environment.assetsPrefix;

  constructor(
    private _route: ActivatedRoute,
    private _jsBridge: JsBridgeService
  ) {
  }

  ngOnInit() {
    const item = this._getItem(this._route.snapshot.params.id);
    this.item = item;
  }

  ngAfterViewInit() {
    this._setNativeApp(this.item);
    this._loadLegend(this.item);
  }

  private _setNativeApp(item) {
    if (item) {
      this._jsBridge.setAppTitle(item.name);
    }
    this._jsBridge.controlAppBackButton(true);
  }

  private _loadLegend(item) {
    this._svgHotPoint.showLoading();
    if (item) {
      this._svgHotPoint.loadSVG(this.assetsPrefix + item.imgSrc);
    } else {
      this._svgHotPoint.loadSVG(this.assetsPrefix + '/assets/images/no_image.jpg');
    }
  }

  public legendLoaded() {
    this._svgHotPoint.hideLoading();
  }

  public selectCallout(callout) {
    console.log(callout);
  }

  private _getItem(id) {

    const result = list.filter((item) => {
      return item.id === id ? true : false;
    });

    if (result.length > 0) {
      return result[0];
    } else {
      return null;
    }
  }
}
