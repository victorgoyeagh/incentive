import { MainComponent } from './../views/main.view';
import { IntroComponent } from './../components/intro/intro.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
    {
        path: '', 
        component: MainComponent,
        pathMatch: 'full'
    },
    {
        path: 'work', 
        component: IntroComponent,
        pathMatch: 'full'
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, 
    { 
        useHash: true
    }
); 