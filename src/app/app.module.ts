import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ComponentsModule} from './modules/components.module';
import {ListComponent} from './pages/list/list.component';
import {DetailComponent} from './pages/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
