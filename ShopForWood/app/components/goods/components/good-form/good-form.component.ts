import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { Good } from '../../models/good.model';

@Component({
    moduleId: module.id,
    selector: 'good-form',
    template: `
        <div *ngIf="good !== undefined">
            <div>
                <input type="text" [(ngModel)]="good.name"/>
            </div>
            <div>
                <input type="text" [(ngModel)]="good.description"/>
            </div>
            <div>
                <input fileupload="ImgSrc.Image" type="file"/>
            </div>
            <button (click)="SubmitFrom()">{{submitButtonName}}</button>
        </div>
    `,
    styleUrls: ['./good-form.component.css']
})
export class GoodFormComponent implements OnInit {
    @Input() good: Good = new Good();
    @Input() submitButtonName: string;
    @Output() submit: EventEmitter<Good> = new EventEmitter<Good>();

    constructor(private _router: Router) { }

    ngOnInit() { }

    private SubmitFrom() {
        this.submit.emit(this.good);
    }
}