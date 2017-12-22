import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Good } from '../../models/good.model';
import { GoodService } from '../../services/good.service';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/mergeMap';

@Component({
    moduleId: module.id,
    selector: 'edit-good',
    template: `
        <good-form 
            [good]="good"
            [submitButtonName]="submitButtonName"
            (imageChange)="imageChanged($event)"
            (submit)="Save()">
        </good-form>
    `,
    styleUrls: ['./edit-good.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class EditGoodComponent implements OnInit, OnDestroy {
    private goodId: number;
    private subscription: Subscription;
    private good: Good;
    private image: File;
    private submitButtonName: string = 'Save';

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

    private imageChanged(imageFile: File) {
        this.image = imageFile;
    }

    private Save() {
        this._goodService.editGood(this.good)
            // Save image to server after creation of the good
            .mergeMap(() => {
                if (this.image === undefined) {
                    return Observable.of(201);
                }

                return this._goodService.addGoodImage(this.good.goodId, this.image)
            })
            .subscribe(() => this._router.navigate(['']));
    }
}