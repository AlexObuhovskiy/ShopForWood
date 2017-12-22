import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
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
            <div class="image" *ngIf="good.imageName && this.imageFile === undefined">
                <img [src]="getImageSrc()" />
            </div>
            <div class="image" *ngIf="previewUrl !== undefined">
                <img [src]="previewUrl" />
            </div>
            <div>
                <input type="file" (change)="onImageChange($event)"/>
            </div>
            <button (click)="SubmitFrom()">{{submitButtonName}}</button>
        </div>
    `,
    styleUrls: ['./good-form.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodFormComponent implements OnInit {
    @Input() good: Good = new Good();
    @Input() submitButtonName: string;
    @Output() submit: EventEmitter<Good> = new EventEmitter<Good>();
    @Output() imageChange: EventEmitter<File> = new EventEmitter<File>();

    private imageFile: File;
    private previewUrl: string;

    constructor(
        private _router: Router,
        private _changeDetectorRef: ChangeDetectorRef
    ) { }

    ngOnInit() { }

    private onImageChange(event: any) {
        let files: FileList = (<HTMLInputElement>event.srcElement).files;
        if (files.length > 0) {
            let reader: FileReader = new FileReader();
            this.imageFile = files[0];

            reader.onload = (e: any) => {
                this.previewUrl = e.target.result;
                this._changeDetectorRef.markForCheck();
            }

            reader.readAsDataURL(this.imageFile);
            this.imageChange.emit(files[0]);
        }
    }

    private SubmitFrom() {
        this.submit.emit(this.good);
    }

    private getImageSrc(): string {
        return '/Images/Goods/' + this.good.imageName;
    }
}