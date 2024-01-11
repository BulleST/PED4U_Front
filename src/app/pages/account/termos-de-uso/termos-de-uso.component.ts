import { Component } from '@angular/core';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-termos-de-uso',
    templateUrl: './termos-de-uso.component.html',
 
})
export class TermosDeUsoComponent {
    faChevronCircleLeft = faChevronCircleLeft;
    constructor() { }

}