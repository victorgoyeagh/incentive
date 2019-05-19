import { CalendarComponent } from './../components/calendar/calendar.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, RouterLinkActive } from '@angular/router';
import { HomeComponent } from '../views/home.view';


const appRoutes: Routes = [
    {
        path: '', 
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'calendar', 
        component: CalendarComponent,
        pathMatch: 'full'
    }
    //{ path: '**', component: PageNotFoundComponent }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, 
    { 
        useHash: true
    }
); 