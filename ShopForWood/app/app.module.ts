import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ContentModule } from './components/content/content.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer.component/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { GoodsGridComponent } from './components/goods-grid/goods-grid.component';
import { GoodsGridModule } from './components/goods-grid/goods-grid.module';

// определение маршрутов
const appRoutes: Routes = [
  { path: '', component: GoodsGridComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, GoodsGridModule,
    ContentModule, RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent, HeaderComponent, FooterComponent, AboutComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
