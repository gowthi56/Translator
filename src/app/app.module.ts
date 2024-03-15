import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewcompComponent } from './newcomp/newcomp.component';
import { ApiservService } from './apiserv.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
 import { NewinterInterceptor } from './newinter.interceptor';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NewcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiservService,
   { provide: HTTP_INTERCEPTORS, useClass: NewinterInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
