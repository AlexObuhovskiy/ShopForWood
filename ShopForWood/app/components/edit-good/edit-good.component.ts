import { Component, OnInit, Input, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { GoodService } from '../../services/good.service';
import { Good } from '../good/models/good.model';
import 'rxjs/add/operator/mergeMap';

@Component({
    moduleId: module.id,
    selector: 'edit-good',
    template: `
        <div *ngIf="good !== undefined">
            <input type="text" [(ngModel)]="good.name"/>
            <input type="text" [(ngModel)]="good.description"/>
        </div>
        <button (click)="Save()">Save</button>
    `,
    styleUrls: ['./edit-good.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class EditGoodComponent implements OnInit, OnDestroy {
    private goodId: number;
    private subscription: Subscription;
    public good: Good;

    constructor(
        private _goodService: GoodService,
        private _activatedRoute: ActivatedRoute,
        private _changeDetectionRef: ChangeDetectorRef,
        private _router: Router
    ) { }

    ngOnInit() {
        this.subscription = this._activatedRoute.params
            .mergeMap((params: Params) => {
                let id = +params['id'];
                return this._goodService.getGood(id);
            })
            .subscribe((good: Good) => {
                this.good = good;
                this._changeDetectionRef.markForCheck();
            });
    }

    ngOnDestroy() {
        if (this.subscription !== undefined) {
            this.subscription.unsubscribe();
        }
    }

    private Save() {
        this._goodService.editGood(this.good)
            .subscribe(() => this._router.navigate(['']));
    }
}