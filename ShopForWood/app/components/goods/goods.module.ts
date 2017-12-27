import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { GoodService } from "./services/good.service";
import { NewGoodComponent } from "./components/new-good/new-good.component";
import { GoodFormComponent } from "./components/good-form/good-form.component";
import { EditGoodComponent } from "./components/edit-good/edit-good.component";
import { GoodComponent } from "./components/good/good.component";
import { GoodsGridComponent } from "./components/goods-grid/goods-grid.component";

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [
        EditGoodComponent, GoodsGridComponent, NewGoodComponent
    ],
    declarations: [
        EditGoodComponent, GoodComponent, GoodFormComponent,
        GoodsGridComponent, NewGoodComponent
    ],
    providers: [GoodService],
})
export class GoodsModule { }
