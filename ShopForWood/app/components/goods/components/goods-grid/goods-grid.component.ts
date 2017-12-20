import {
    Component, OnInit, OnDestroy,
    ChangeDetectorRef, ChangeDetectionStrategy
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { GoodService } from '../../services/good.service';
import { Good } from '../../models/good.model';

@Component({
    selector: 'goods-grid',
    template: `
        <div *ngIf="goods !== undefined">
            <div *ngFor="let good of goods">
                <good [instance]="good" (delete)="deleted($event)"></good>
            </div>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodsGridComponent implements OnInit, OnDestroy {
    public goods: Good[];
    private goodSubscription: Subscription;
    private newGood: Good;

    constructor(
        private _goodService: GoodService,
        private _changeDetector: ChangeDetectorRef
    ) {
        this.newGood = new Good();
    }

    ngOnInit() {
        this.updateGoods();
    }

    ngOnDestroy() {
        this.goodSubscription.unsubscribe();
    }

    private updateGoods() {
        this.goodSubscription = this._goodService.getAllGoods()
            .subscribe((goods: Good[]) => {
                this.goods = goods;
                this._changeDetector.markForCheck();
            });
    }

    private deleted(goodIdForDelete: number) {
        this._goodService.deleteGood(goodIdForDelete)
            .subscribe((deletedGood: Good) => {
                let indexForDelete: number = this.goods.findIndex((g: Good) => g.goodId === deletedGood.goodId);
                this.goods.splice(indexForDelete, 1);
                this._changeDetector.markForCheck();
            });
    }
}
