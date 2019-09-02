import { IntroComponent } from './../components/intro/intro.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from 'app/pages/homepage/homepage.component';
import { BaseComponent } from 'app/base.component';
import { MainTemplate } from './../views/main.view';

const appRoutes: Routes = [
    {
        path: '', 
        component: MainTemplate,
        children: [
            {
                path: '', 
                component: HomepageComponent
            }
        ]
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, 
    { 
        useHash: true
    }
); 