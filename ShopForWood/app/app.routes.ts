import { Routes } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { GoodsGridComponent } from "./components/goods/components/goods-grid/goods-grid.component";
import { EditGoodComponent } from "./components/goods/components/edit-good/edit-good.component";
import { NewGoodComponent } from "./components/goods/components/new-good/new-good.component";

export const routes: Routes = [
    { path: '', component: GoodsGridComponent },
    { path: 'about', component: AboutComponent },
    { path: 'new-good', component: NewGoodComponent },    
    { path: 'edit-good/:id', component: EditGoodComponent },
    { path: '**', component: PageNotFoundComponent },
];
