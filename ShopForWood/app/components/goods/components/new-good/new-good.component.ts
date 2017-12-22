import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { Good } from '../../models/good.model';
import { GoodService } from '../../services/good.service';
import 'rxjs/add/operator/mergeMap';

@Component({
    moduleId: module.id,
    selector: 'new-good',
    template: `
        <good-form
            [good]="good"
            [submitButtonName]="submitButtonName"
            (imageChange)="imageChanged($event)"
            (submit)="Submit()">
        </good-form>
    `,
    styleUrls: ['./new-good.component.css']
})
export class NewGoodComponent implements OnInit {
    private good: Good = new Good;
    private image: File;
    private submitButtonName: string = 'Save';

    constructor(
        private _goodService: GoodService,
        private _router: Router
    ) { }

    ngOnInit() { }

    private imageChanged(imageFile: File) {
        this.image = imageFile;
    }

    private Submit() {
        this._goodService.addGood(this.good)
            // Save image to server after creation of the good
            .mergeMap((createdGood: Good) => this._goodService.addGoodImage(createdGood.goodId, this.image))
            .subscribe(() => this._router.navigate(['']));;
    }
}
