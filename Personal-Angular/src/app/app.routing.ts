import { Routes } from '@angular/router';

import { MeComponent }   from './me/me.component';
import { ProjectsComponent }   from './projects/projects.component';
import { YoutubeComponent }   from './youtube/youtube.component';
import { PhotographyComponent }   from './photography/photography.component';
import { ExperienceComponent }   from './experience/experience.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'aboutme',
        pathMatch: 'full',
    },
    {
        path: 'aboutme',
        component: MeComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'youtube',
        component: YoutubeComponent
    },
    {
        path: 'photography',
        component: PhotographyComponent
    },
    {
        path: 'experience',
        component: ExperienceComponent
    },
]
