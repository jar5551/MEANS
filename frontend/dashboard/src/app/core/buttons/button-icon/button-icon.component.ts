import {Component, forwardRef, OnInit} from '@angular/core';
import {ButtonComponent} from '../button/button.component';

@Component({
    selector: 'app-button-icon',
    templateUrl: './button-icon.component.html',
    styleUrls: ['./button-icon.component.scss'],
    providers: [
        {
            provide: ButtonComponent, useExisting: forwardRef(() => ButtonIconComponent)
        }
    ]
})
export class ButtonIconComponent extends ButtonComponent implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
