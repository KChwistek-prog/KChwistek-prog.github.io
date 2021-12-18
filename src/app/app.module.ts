import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RpimsSensorsListComponent } from './rpims-sensors-list/rpims-sensors-list.component';
import { RpimsSensorsService } from './rpims-sensors-service/rpims-sensors-service.service';

@NgModule({
  declarations: [
    AppComponent,
    RpimsSensorsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RpimsSensorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
