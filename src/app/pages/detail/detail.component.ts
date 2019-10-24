import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {list} from '../../../../mock/list';
import {SvgHotpointComponent} from '../../components/svg-hotpoint/svg-hotpoint.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements AfterViewInit {

  @ViewChild('svgHotPoint', {static: false})
  private _svgHotPoint: SvgHotpointComponent;

  constructor(
    private _route: ActivatedRoute
  ) {
  }

  ngAfterViewInit() {
    this._loadLegend(this._route.snapshot.params.id);
  }

  private _loadLegend(id) {
    const item = this._getItem(id);
    this._svgHotPoint.showLoading();
    if (item) {
      this._svgHotPoint.loadSVG(item.imgSrc);
    } else {
      this._svgHotPoint.loadSVG('/assets/images/no_image.jpg');
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
