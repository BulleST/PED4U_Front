import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './parts/header/header.component';
import { TableModule } from 'primeng/table';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { AnimateModule } from 'primeng/animate';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { RequestInterceptor } from './helpers/request.interceptor';
import { CurrencyPipe, DatePipe } from '@angular/common';
import {  NgxMaskModule, NgxMaskPipe } from 'ngx-mask';
import { MenubarModule } from 'primeng/menubar';
import { jwtDecode } from 'jwt-decode';
import { LoadingComponent } from './parts/loading/loading.component';
import { AlertComponent } from './parts/alert/alert.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlertComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    PanelMenuModule,
    PanelModule,
    ButtonModule,
    CardModule,
    AnimateModule,
    MenuModule,
    ToastModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    MenubarModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot({
      preventDuplicates: true,
      enableHtml: true
    })
    
    
   
  ],
  providers: [
    CurrencyPipe,
    NgxMaskPipe,
    DatePipe,
    
 
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'},
    {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
