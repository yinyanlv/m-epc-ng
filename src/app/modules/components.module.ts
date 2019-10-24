import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {LoadingComponent} from '../components/loading/loading.component';
import {LoadingDirective} from '../directives/loading.directive';
import {SvgHotpointComponent} from '../components/svg-hotpoint/svg-hotpoint.component';
import {SvgDragZoomComponent} from '../components/svg-drag-zoom/svg-drag-zoom.component';

const components = [
  LoadingComponent,
  SvgHotpointComponent,
  SvgDragZoomComponent
];

const directives = [
  LoadingDirective,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    ...components,
    ...directives
  ],
  providers: [],
  entryComponents: [LoadingComponent],
  exports: [
    ...components,
    ...directives,
    RouterModule
  ]
})

export class ComponentsModule {
}
