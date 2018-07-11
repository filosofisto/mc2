import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MInputComponent } from './mc2/components/m-input/m-input.component';
import { AButtonComponent } from './mc2/components/a-button/a-button.component';
import { ADateComponent } from './mc2/components/a-date/a-date.component';
import { AInputComponent } from './mc2/components/a-input/a-input.component';
import { ALabelComponent } from './mc2/components/a-label/a-label.component';
import { AEmailComponent } from './mc2/components/a-email/a-email.component';
import { APasswordComponent } from './mc2/components/a-password/a-password.component';
import { ATimeComponent } from './mc2/components/a-time/a-time.component';
import { ACalendarComponent } from './mc2/components/a-calendar/a-calendar.component';
import { MCalendarComponent } from './mc2/components/m-calendar/m-calendar.component';
import { MDateComponent } from './mc2/components/m-date/m-date.component';
import { MEmailComponent } from './mc2/components/m-email/m-email.component';
import { MPasswordComponent } from './mc2/components/m-password/m-password.component';
import { MTimeComponent } from './mc2/components/m-time/m-time.component';
import { FormSampleComponent } from './form-sample/form-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    MInputComponent,
    AButtonComponent,
    ADateComponent,
    AInputComponent,
    ALabelComponent,
    AEmailComponent,
    APasswordComponent,
    ATimeComponent,
    ACalendarComponent,
    MCalendarComponent,
    MDateComponent,
    MEmailComponent,
    MPasswordComponent,
    MTimeComponent,
    FormSampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
