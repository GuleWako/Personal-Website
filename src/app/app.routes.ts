import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { OurserviceComponent } from './components/myservice/ourservice.component';
import { OurworkComponent } from './components/mywork/ourwork.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'about',
        component:AboutusComponent
    },
    {
        path:'services',
        component:OurserviceComponent
    },
    {
        path:'works',
        component:OurworkComponent
    },
    {
        path:'contact',
        component:ContactComponent
    }
];
