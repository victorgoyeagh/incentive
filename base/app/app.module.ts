/* angular */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 

/* third_party */
import { NgRedux, NgReduxModule } from 'ng2-redux';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { RootReducer } from './state/state.store';  

/* third_party_material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* components */
import { Routing } from './routers/routing.route'; 
import { MainTemplate } from './views/main.view';
import { BaseComponent } from './base.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalOverlayComponent } from './components/modal/modal.component';

/* services */
import { CommunicationService } from './services/communication.service';
import { ParallaxDirective } from './directives/parallax.directive';

/* modules */
import { ContactFormModule } from './components/contact-form/contact-form.module';
import { QuoteFormModule } from './components/quote-form/quote-form.module';
import { IntroComponent } from './components/intro/intro.component'; 
import { HomepageComponent } from './pages/homepage/homepage.component';
import { WhoWeAreComponent } from './pages/who-we-are/who-we-are.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { WorkComponent } from './pages/work/work.component';

@NgModule({
    declarations: [
        HomepageComponent,
        WhoWeAreComponent,
        ServicesComponent,
        BlogComponent,
        WorkComponent,
        ContactUsComponent,
        HeaderComponent,
        IntroComponent,
        BaseComponent,  
        FooterComponent,
        MainTemplate,
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
        HttpModule,
        Routing,
        NgReduxModule,
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers: [
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
