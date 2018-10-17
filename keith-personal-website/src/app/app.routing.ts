import { Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';


export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'aboutme',
        pathMatch: 'full',
    },
    {
        path: 'aboutme',
        component: ProfileComponent
    },
]
