import { IntroComponent } from './../components/intro/intro.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../views/home.view';


const appRoutes: Routes = [
    {
        path: '', 
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'calendar', 
        component: IntroComponent,
        pathMatch: 'full'
    }
    //{ path: '**', component: PageNotFoundComponent }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, 
    { 
        useHash: true
    }
); 