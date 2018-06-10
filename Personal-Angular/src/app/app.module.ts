import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { NguiMapModule} from '@ngui/map';

import { MeComponent }   from './me/me.component';
import { ProjectsComponent }   from './projects/projects.component';
import { YoutubeComponent }   from './youtube/youtube.component';
import { PhotographyComponent }   from './photography/photography.component';

import { ExperienceComponent }   from './experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    MeComponent,
    ProjectsComponent,
    YoutubeComponent,
    PhotographyComponent,

    ExperienceComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
