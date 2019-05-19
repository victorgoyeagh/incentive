import { CalendarComponent } from './components/calendar/calendar.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
/* angular */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from "@angular/common";

/* third_party */
import { TooltipModule } from "ngx-tooltip";
import { NgRedux, NgReduxModule } from 'ng2-redux';
import { Ng2Bs3ModalModule, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { RootReducer, appInitialState } from './state/state.store'; 
import { SimpleNotificationsModule, PushNotificationsModule } from 'angular2-notifications';
import { FileUploadModule, FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { Reducer } from 'redux';

/* third_party_material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* components */
import { Routing } from './routers/routing.route';
import { HomeComponent } from './views/home.view';
import { MainComponent } from './views/main.view';
import { BaseComponent } from './base.component';
import { FooterComponent } from './components/shared/footer.component';
import { HeaderComponent } from './components/shared/header.component';
import { NavigationComponent } from './components/shared/navigation.component';
import { ModalOverlayComponent } from './components/modal/modal.component';

/* services */
import { CommunicationService } from './services/communication.service';
import { ParallaxDirective } from './directives/parallax.directive';

/* modules */
import { ContactFormModule } from './components/contact-form/contact-form.module';
import { QuoteFormModule } from './components/quote-form/quote-form.module';
import { HttpInterceptorService } from './services/httpinterceptor.service';



@NgModule({
    declarations: [
        CalendarComponent,
        BaseComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        NavigationComponent,
        MainComponent,
        ModalOverlayComponent,
        ParallaxDirective
    ],
    exports: [
    ],
    imports: [
        QuoteFormModule,
        ContactFormModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
        Routing,
        NgReduxModule,
        TooltipModule,
        SimpleNotificationsModule.forRoot(),
        Ng2Bs3ModalModule,
        FileUploadModule, 
        BrowserAnimationsModule
    ],
    providers: [
        { 
            provide: HTTP_INTERCEPTORS,
            useClass: HttpInterceptorService, multi: true 
        },
        CommunicationService
    ],
    bootstrap:  [
        BaseComponent
    ]
})

export class AppModule {

    constructor(
        private _store: NgRedux<any>
    ) {
        this._store.configureStore(RootReducer, {}); 
    }
}
