import { Routes } from "@angular/router";
import { GoodsGridComponent } from "./components/goods-grid/goods-grid.component";
import { AboutComponent } from "./components/about/about.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { EditGoodComponent } from "./components/edit-good/edit-good.component";

export const routes: Routes = [
    { path: '', component: GoodsGridComponent },
    { path: 'about', component: AboutComponent },
    { path: 'edit-good/:id', component: EditGoodComponent },
    { path: '**', component: PageNotFoundComponent },
];