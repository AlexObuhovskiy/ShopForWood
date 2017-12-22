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
                <input type="file" (change)="onImageChange($event)"/>
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
    @Output() imageChange: EventEmitter<File> = new EventEmitter<File>();

    constructor(private _router: Router) { }

    ngOnInit() { }

    private onImageChange(event: any) {
        let files: FileList = (<HTMLInputElement>event.srcElement).files;
        if (files.length > 0) {
            this.imageChange.emit(files[0]);
        }
    }

    private SubmitFrom() {
        this.submit.emit(this.good);
    }
}