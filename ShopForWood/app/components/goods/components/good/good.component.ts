import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { Good } from '../../models/good.model';

@Component({
    moduleId: module.id,
    selector: 'good',
    template: `
        <div class="main">
            <div class="name">
                {{good.name}}
            </div>
            <div class="description">
                <label for="description">Description:</label>
                <span id="description">{{good.description}}</span>
            </div>
            <button class="remove" (click)="remove()"></button>
            <button (click)='editGood()'>Edit</button>
        </div>
    `,
    styleUrls: ['./good.component.css']
})
export class GoodComponent implements OnInit {
    @Input() good: Good;
    @Output() delete: EventEmitter<number> = new EventEmitter<number>();

    constructor(private _router: Router) { }

    ngOnInit() { }

    private remove() {
        this.delete.emit(this.good.goodId);
    }

    private editGood() {
        this._router.navigate(['/edit-good', this.good.goodId]);
    }
}