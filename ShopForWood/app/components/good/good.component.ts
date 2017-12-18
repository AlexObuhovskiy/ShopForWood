import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Response } from '@angular/http';
import { Good } from './models/good.model';

@Component({
    moduleId: module.id,
    selector: 'good',
    template: `
        <div class="main">
            <div class="name">
                {{instance.name}}
            </div>
            <div class="description">
                <label for="description">Description:</label>
                <span id="description">{{instance.description}}</span>
            </div>
            <button class="remove" (click)="remove()"></button>
        </div>
    `,
    styleUrls: ['./good.component.css']
})
export class GoodComponent implements OnInit {
    @Input() instance: Good;
    @Output() delete: EventEmitter<number> = new EventEmitter<number>();

    constructor() { }

    ngOnInit() { }

    private remove() {
        this.delete.emit(this.instance.goodId);
    }
}