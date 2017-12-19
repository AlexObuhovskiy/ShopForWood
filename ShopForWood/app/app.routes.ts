import { Routes } from "@angular/router";
import { GoodsGridComponent } from "./components/goods-grid/goods-grid.component";
import { AboutComponent } from "./components/about/about.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

export const routes: Routes = [
    { path: '', component: GoodsGridComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: PageNotFoundComponent },
];