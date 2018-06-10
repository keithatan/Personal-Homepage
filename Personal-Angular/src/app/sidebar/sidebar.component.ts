import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'aboutme', title: 'About Me',  icon:'ti-user', class: '' },
    { path: 'experience', title: 'Experience',  icon:'ti-briefcase', class: '' },
    { path: 'projects', title: 'Personal Projects',  icon:'ti-clipboard', class: '' },
   /* { path: 'youtube', title: 'YouTube',  icon:'ti-youtube', class: '' },*/
  /* { path: 'icons', title: 'Photography',  icon:'ti-camera', class: '' },*/
    
   
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

}
