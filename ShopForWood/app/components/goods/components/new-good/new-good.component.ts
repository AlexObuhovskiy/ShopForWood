import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { Good } from '../../models/good.model';
import { GoodService } from '../../services/good.service';

@Component({
    moduleId: module.id,
    selector: 'new-good',
    template: `
        <good-form
            [good]="good"
            [submitButtonName]="submitButtonName"
            (submit)="Submit()">
        </good-form>
    `,
    styleUrls: ['./new-good.component.css']
})
export class NewGoodComponent implements OnInit {
    private good: Good = new Good;
    private submitButtonName: string = 'Save';

    constructor(
        private goodService: GoodService,
        private _router: Router
    ) { }

    ngOnInit() { }

    private Submit() {
        this.goodService.addGood(this.good)
            .subscribe(() => this._router.navigate(['']));;
    }
}