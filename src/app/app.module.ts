import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClickOutsideModule } from 'ng-click-outside';
import { AppComponent } from './app.component';
import { CallToActionBarComponent } from './call-to-action-bar/call-to-action-bar.component';
import { ModalComponent } from './modal/modal.component';
import { ViewPinballMachineRecordComponent } from './view-pinball-machine-record/view-pinball-machine-record.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewPinballMachineRecordComponent,
    ModalComponent,
    CallToActionBarComponent,
  ],
  imports: [
    BrowserModule,
    ClickOutsideModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
