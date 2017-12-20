import { GoodsGridComponent } from './goods-grid.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GoodComponent } from '../good/good.component';
import { GoodService } from '../../services/good.service';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [GoodsGridComponent],
    declarations: [GoodsGridComponent, GoodComponent],
    providers: [GoodService],
})
export class GoodsGridModule { }
