import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { ContentModule } from './components/content/content.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer.component/footer.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GoodsGridModule } from './components/goods/components/goods-grid/goods-grid.module';
import { EditGoodModule } from './components/goods/components/edit-good/edit-good.module';


@NgModule({
  imports: [
    BrowserModule, FormsModule, HttpModule, GoodsGridModule,
    ContentModule, RouterModule.forRoot(routes), EditGoodModule
  ],
  declarations: [
    AppComponent, HeaderComponent,
    FooterComponent, AboutComponent, PageNotFoundComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
