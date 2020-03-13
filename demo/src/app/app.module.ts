import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData, LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import en from '@angular/common/locales/en';

import { EmptyRouteComponent } from './empty-route/empty-route.component';

registerLocaleData(en);

@NgModule({
    declarations: [
        AppComponent,
        EmptyRouteComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgZorroAntdModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
    ],
    providers: [
        { provide: NZ_I18N, useValue: en_US },
        { provide: APP_BASE_HREF, useValue: '/' }
        // { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
