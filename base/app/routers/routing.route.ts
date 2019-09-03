import { ContactUsComponent } from './../pages/contact-us/contact-us.component';
import { WhoWeAreComponent } from './../pages/who-we-are/who-we-are.component';
import { BlogComponent } from './../pages/blog/blog.component';
import { WorkComponent } from './../pages/work/work.component';
import { ServicesComponent } from './../pages/services/services.component';
import { HomepageComponent } from './../pages/homepage/homepage.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainTemplate } from './../views/main.view';


const appRoutes: Routes = [
    {
        path: '', 
        component: MainTemplate,
        children: [
            {
                path: '', 
                component: HomepageComponent
            },
            {
                path: 'services', 
                component: ServicesComponent
            },
            {
                path: 'work', 
                component: WorkComponent
            },
            {
                path: 'blog', 
                component: BlogComponent
            },
            {
                path: 'who-are-we', 
                component: WhoWeAreComponent
            },
            {
                path: 'contact', 
                component: ContactUsComponent
            }
        ]
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, 
    { 
        useHash: true
    }
); 