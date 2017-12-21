import { Subscription } from 'rxjs/Subscription';
import { GoodService } from './../../services/good.service';
import {
    Component, OnInit, OnDestroy, Input, Output,
    EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';
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
            <div *ngIf="imageData !== undefined">
                <img [src]="imageData" />
            </div>
            <button class="remove" (click)="remove()"></button>
            <button (click)='editGood()'>Edit</button>
        </div>
    `,
    styleUrls: ['./good.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodComponent implements OnInit, OnDestroy {
    private imageData: string;
    private subscription: Subscription;

    @Input() good: Good;
    @Output() delete: EventEmitter<number> = new EventEmitter<number>();

    constructor(
        private _router: Router,
        private _goodService: GoodService,
        private _changeDetectorRef: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.subscription = this._goodService.getGoodImage(this.good.goodId)
            .subscribe((imgBase64) => {
                this.imageData = 'data:image/png;base64,' + imgBase64;
                this._changeDetectorRef.markForCheck();
            });
    }
    ngOnDestroy() {
        if (this.subscription !== undefined) {
            this.subscription.unsubscribe();
        }
    }

    private remove() {
        this.delete.emit(this.good.goodId);
    }

    private editGood() {
        this._router.navigate(['/edit-good', this.good.goodId]);
    }
}