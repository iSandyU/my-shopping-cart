import {Component, Output, EventEmitter} from '@angular/core' ;

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls : ['./header.component.css']
})
export class HeaderComponent{

    @Output() featureEvent = new EventEmitter<string>();

    selectMenu(selectedMenu:string){
        this.featureEvent.emit(selectedMenu);
    }

}