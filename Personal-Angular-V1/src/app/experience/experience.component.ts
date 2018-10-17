import { Component } from '@angular/core';

declare var $:any;

@Component({
    selector: 'experience-cmp',
    moduleId: module.id,
    templateUrl: 'experience.component.html'
})

export class ExperienceComponent{
    showNotification(from, align){
        var type = ['','info','success','warning','danger'];

        var color = Math.floor((Math.random() * 4) + 1);

    	$.notify({
        	icon: "ti-gift",
        	message: "Welcome!"
        },{
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
    }
}
